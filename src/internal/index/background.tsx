import * as THREE from "three"
import { Suspense, useCallback, useRef, useMemo } from "react"
import React from "react"
import { Canvas, useFrame, useThree, useRender } from "react-three-fiber"
import useGetWindowSize from "../../hooks/useGetWindowSize"
import styled from "@emotion/styled"

const tempColor = new THREE.Color()
const colors_ = [
  0xffffff,
  0xffffff,
  0xffffff,
  0xffffff,
  0xffffff,
  0xffffff,
  0xffffff,
  0xffffff,
  0xe16b8c,
  0x113285,
  0xe16b8c,
  0x113285,
]
const colors = new Array<string>(3000)
  .fill("")
  .map(() => colors_[Math.floor(Math.random() * (colors_.length + 1))])

const direction = {
  xMin: -0.6,
  xMax: 0.3,
  yMin: -1,
  yMax: -0.6,
  zMin: -0.6,
  zMax: 0.3,
}
const getVelocityMultiplier = (min: number, max: number) =>
  Math.random() * (max - min) + min

function Swarm({ count }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(3000)
          .fill("")
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  )
  const { size } = useThree()
  const { width, height } = useGetWindowSize()
  const xDirection = getVelocityMultiplier(direction.xMin, direction.xMax) * 2
  const yDirection = getVelocityMultiplier(direction.yMin, direction.yMax) * 2
  const xBounds = width / 22
  const yBounds = height

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() / 10
      const factor = 20 + Math.random() * 1
      const speed = Math.random() / 10 + 0.1
      let xFactor = Math.random() * xBounds - xBounds / 2
      let yFactor = Math.random() * yBounds - yBounds / 2
      const xRandom = 0.15 * (Math.random() - 0.5)
      const ballSize = 0.03 + Math.random() / 50
      const xPos = xFactor
      const yPos = yFactor
      temp.push({
        t,
        factor,
        speed,
        xFactor,
        yFactor,
        xRandom,
        ballSize,
        xPos,
        yPos,
      })
    }
    return temp
  }, [size])

  useRender(() => {
    particles.forEach((particle, i) => {
      let {
        t,
        factor,
        speed,
        xFactor,
        yFactor,
        xRandom,
        ballSize,
        xPos,
        yPos,
      } = particle
      t = particle.t = speed
      // let xPos = xFactor + xDirection * speed * t * xRandom;
      // let yPos = yFactor + yDirection * (speed + ballSize) * t;
      xPos = particle.xPos += xDirection * speed * xRandom
      yPos = particle.yPos += yDirection * (speed + ballSize) * t * 7
      if (xPos > xBounds / 2) xPos = particle.xPos -= xBounds / 2
      else if (xPos < -xBounds / 2) xPos = particle.xPos += xBounds / 2
      if (yPos > yBounds / 2) yPos = particle.yPos -= yBounds
      else if (yPos < -yBounds / 2) yPos = particle.yPos += yBounds

      dummy.position.set(xPos, yPos / 20, -20)
      dummy.scale.set(ballSize, ballSize, ballSize)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereBufferGeometry attach="geometry" args={[1, 30, 30]}>
          <instancedBufferAttribute
            attachObject={["attributes", "color"]}
            args={[colorArray, 3]}
          />
        </sphereBufferGeometry>
        <meshPhongMaterial
          attach="material"
          vertexColors={THREE.VertexColors}
        />
      </instancedMesh>
    </>
  )
}

export const StyledBackground = () => {
  return (
    <Canvas
      gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
      camera={{ position: [0, 0, 1.5] }}
      onCreated={({ gl }) => {
        gl.setClearColor("black")
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
      }}
    >
      <ambientLight intensity={0.2} />
      <Swarm count={3000} />
    </Canvas>
  )
}

export default StyledBackground
