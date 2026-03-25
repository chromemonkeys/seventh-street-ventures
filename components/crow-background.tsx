"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// --- Crow geometry ---
function createCrowGeometry() {
  const shape = new THREE.BufferGeometry()
  const vertices = new Float32Array([
    0, 0.05, -0.3, -0.06, 0, 0.15, 0.06, 0, 0.15,
    0, -0.04, -0.2, -0.06, 0, 0.15, 0.06, 0, 0.15,
    -0.06, 0, 0.05, -0.06, 0, 0.15, -0.45, 0.08, 0.1,
    0.06, 0, 0.05, 0.06, 0, 0.15, 0.45, 0.08, 0.1,
    -0.04, 0, 0.15, 0.04, 0, 0.15, 0, 0.02, 0.25,
  ])
  const wingFlag = new Float32Array([
    0, 0, 0, 0, 0, 0,
    0, 0, 1,
    0, 0, 2,
    0, 0, 0,
  ])
  shape.setAttribute("position", new THREE.BufferAttribute(vertices, 3))
  shape.setAttribute("wingFlag", new THREE.BufferAttribute(wingFlag, 1))
  shape.computeVertexNormals()
  return shape
}

// --- Boid flocking ---
const CROW_COUNT = 24
const BOUNDS = 18
const BOUNDS_Y_MIN = 5
const BOUNDS_Y_MAX = 14

interface BoidState {
  positions: Float32Array
  velocities: Float32Array
  phases: Float32Array
}

function initBoids(): BoidState {
  const positions = new Float32Array(CROW_COUNT * 3)
  const velocities = new Float32Array(CROW_COUNT * 3)
  const phases = new Float32Array(CROW_COUNT)
  for (let i = 0; i < CROW_COUNT; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * BOUNDS * 1.5
    positions[i3 + 1] = BOUNDS_Y_MIN + Math.random() * (BOUNDS_Y_MAX - BOUNDS_Y_MIN)
    positions[i3 + 2] = (Math.random() - 0.5) * BOUNDS * 1.5
    const angle = Math.random() * Math.PI * 2
    const speed = 1.2 + Math.random() * 0.8
    velocities[i3] = Math.cos(angle) * speed
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.3
    velocities[i3 + 2] = Math.sin(angle) * speed
    phases[i] = Math.random() * Math.PI * 2
  }
  return { positions, velocities, phases }
}

function updateBoids(boids: BoidState, delta: number, mouseTarget: THREE.Vector3 | null) {
  const { positions, velocities } = boids
  for (let i = 0; i < CROW_COUNT; i++) {
    const i3 = i * 3
    let sx = 0, sy = 0, sz = 0
    let ax = 0, ay = 0, az = 0
    let cx = 0, cy = 0, cz = 0
    let neighbors = 0
    for (let j = 0; j < CROW_COUNT; j++) {
      if (i === j) continue
      const j3 = j * 3
      const dx = positions[i3] - positions[j3]
      const dy = positions[i3 + 1] - positions[j3 + 1]
      const dz = positions[i3 + 2] - positions[j3 + 2]
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      if (dist < 8) {
        neighbors++
        ax += velocities[j3]; ay += velocities[j3 + 1]; az += velocities[j3 + 2]
        cx += positions[j3]; cy += positions[j3 + 1]; cz += positions[j3 + 2]
        if (dist < 2.5 && dist > 0) {
          const force = 1 / dist
          sx += dx * force; sy += dy * force; sz += dz * force
        }
      }
    }
    if (neighbors > 0) {
      ax /= neighbors; ay /= neighbors; az /= neighbors
      cx = cx / neighbors - positions[i3]
      cy = cy / neighbors - positions[i3 + 1]
      cz = cz / neighbors - positions[i3 + 2]
      velocities[i3] += sx * 0.5 + (ax - velocities[i3]) * 0.04 + cx * 0.003
      velocities[i3 + 1] += sy * 0.5 + (ay - velocities[i3 + 1]) * 0.04 + cy * 0.003
      velocities[i3 + 2] += sz * 0.5 + (az - velocities[i3 + 2]) * 0.04 + cz * 0.003
    }
    const margin = BOUNDS * 0.7
    if (positions[i3] > margin) velocities[i3] -= 0.1
    if (positions[i3] < -margin) velocities[i3] += 0.1
    if (positions[i3 + 2] > margin) velocities[i3 + 2] -= 0.1
    if (positions[i3 + 2] < -margin) velocities[i3 + 2] += 0.1
    if (positions[i3 + 1] > BOUNDS_Y_MAX) velocities[i3 + 1] -= 0.08
    if (positions[i3 + 1] < BOUNDS_Y_MIN) velocities[i3 + 1] += 0.08
    velocities[i3 + 1] += (9 - positions[i3 + 1]) * 0.002

    // Mouse attraction
    if (mouseTarget) {
      const mx = mouseTarget.x - positions[i3]
      const my = mouseTarget.y - positions[i3 + 1]
      const mz = mouseTarget.z - positions[i3 + 2]
      const mDist = Math.sqrt(mx * mx + my * my + mz * mz)
      if (mDist > 0.5) {
        const strength = 0.015
        velocities[i3] += (mx / mDist) * strength
        velocities[i3 + 1] += (my / mDist) * strength
        velocities[i3 + 2] += (mz / mDist) * strength
      }
    }

    const vx = velocities[i3], vy = velocities[i3 + 1], vz = velocities[i3 + 2]
    const speed = Math.sqrt(vx * vx + vy * vy + vz * vz)
    if (speed > 2.8) {
      const s = 2.8 / speed
      velocities[i3] *= s; velocities[i3 + 1] *= s; velocities[i3 + 2] *= s
    } else if (speed < 1.0 && speed > 0) {
      const s = 1.0 / speed
      velocities[i3] *= s; velocities[i3 + 1] *= s; velocities[i3 + 2] *= s
    }
    positions[i3] += velocities[i3] * delta
    positions[i3 + 1] += velocities[i3 + 1] * delta
    positions[i3 + 2] += velocities[i3 + 2] * delta
  }
}

// --- Crow shader ---
const vertShader = `
  attribute float wingFlag;
  uniform float uTime;
  uniform float uPhase;
  varying float vShade;
  void main() {
    vec3 pos = position;
    float flap = sin(uTime * 8.0 + uPhase) * 0.35;
    if (wingFlag > 0.5 && wingFlag < 1.5) {
      pos.y += flap;
      pos.x -= abs(flap) * 0.15;
    } else if (wingFlag > 1.5) {
      pos.y += flap;
      pos.x += abs(flap) * 0.15;
    }
    vShade = 0.3 + 0.7 * (1.0 - (position.z + 0.3) / 0.55);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragShader = `
  varying float vShade;
  void main() {
    vec3 color = mix(vec3(0.05, 0.02, 0.08), vec3(0.15, 0.1, 0.2), vShade);
    gl_FragColor = vec4(color, 1.0);
  }
`

// --- Crow mesh ---
function Crow({ index, boids }: { index: number; boids: BoidState }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const geometry = useMemo(() => createCrowGeometry(), [])
  const material = useMemo(
    () => new THREE.ShaderMaterial({
      vertexShader: vertShader,
      fragmentShader: fragShader,
      uniforms: {
        uTime: { value: 0 },
        uPhase: { value: boids.phases[index] },
      },
      side: THREE.DoubleSide,
    }),
    [boids.phases, index]
  )

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const i3 = index * 3
    const x = boids.positions[i3]
    const y = boids.positions[i3 + 1]
    const z = boids.positions[i3 + 2]
    meshRef.current.position.set(x, y, z)
    const vx = boids.velocities[i3]
    const vy = boids.velocities[i3 + 1]
    const vz = boids.velocities[i3 + 2]
    meshRef.current.lookAt(x + vx, y + vy, z + vz)
    const bankAngle = Math.atan2(vx, vz)
    meshRef.current.rotation.z = Math.sin(bankAngle - meshRef.current.rotation.y) * 0.3
    material.uniforms.uTime.value = clock.elapsedTime
  })

  return <mesh ref={meshRef} geometry={geometry} material={material} scale={1.8} />
}

// --- Cloud particles ---
function CloudParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60
      pos[i * 3 + 1] = 2 + Math.random() * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.005
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#c4b8d9"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// --- Scene ---
function Scene() {
  const boids = useMemo(() => initBoids(), [])
  const mouseTarget = useRef<THREE.Vector3 | null>(null)
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const mouseNDC = useRef(new THREE.Vector2(0, 0))
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])

  // Track mouse position
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseNDC.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseNDC.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  useFrame((state, delta) => {
    // Project mouse into 3D at the flock's height
    raycaster.setFromCamera(mouseNDC.current, state.camera)
    const target = new THREE.Vector3()
    raycaster.ray.at(30, target) // project 30 units along ray
    target.y = Math.max(target.y, BOUNDS_Y_MIN) // keep within flock height
    target.y = Math.min(target.y, BOUNDS_Y_MAX)
    mouseTarget.current = target

    updateBoids(boids, Math.min(delta, 0.05), mouseTarget.current)
    const t = state.clock.elapsedTime * 0.06
    const radius = 28
    state.camera.position.x = Math.sin(t) * radius
    state.camera.position.z = Math.cos(t) * radius
    state.camera.position.y = 2 + Math.sin(t * 0.7) * 1.5
    state.camera.lookAt(0, 8, 0)
  })

  const crows = useMemo(
    () => Array.from({ length: CROW_COUNT }, (_, i) => (
      <Crow key={i} index={i} boids={boids} />
    )),
    [boids]
  )

  return (
    <>
      <fog attach="fog" args={["#f5efe6", 20, 80]} />
      <ambientLight intensity={0.6} color="#d8cff0" />
      <directionalLight position={[5, 10, 5]} intensity={0.4} color="#f3cda2" />

      <mesh scale={[-200, -200, -200]}>
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial
          side={THREE.BackSide}
          uniforms={{
            uTopColor: { value: new THREE.Color("#d8cff0") },
            uBottomColor: { value: new THREE.Color("#f5efe6") },
            uMidColor: { value: new THREE.Color("#f3cda2") },
          }}
          vertexShader={`
            varying vec3 vWorldPosition;
            void main() {
              vec4 worldPos = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPos.xyz;
              gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
          `}
          fragmentShader={`
            uniform vec3 uTopColor;
            uniform vec3 uBottomColor;
            uniform vec3 uMidColor;
            varying vec3 vWorldPosition;
            void main() {
              float h = normalize(vWorldPosition).y;
              vec3 color;
              if (h > 0.0) {
                color = mix(uMidColor, uTopColor, h);
              } else {
                color = mix(uMidColor, uBottomColor, -h);
              }
              gl_FragColor = vec4(color, 1.0);
            }
          `}
        />
      </mesh>

      <CloudParticles />
      {crows}
    </>
  )
}

export default function CrowBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      <Canvas
        camera={{ position: [28, 2, 0], fov: 55, near: 0.1, far: 250 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
