import * as THREE from "three"
import { useRef, useMemo } from "react"
import React from "react"
import { Canvas, useThree, useRender } from "react-three-fiber"
import styled from "@emotion/styled"
import { window } from "ssr-window"

const { innerWidth: width, innerHeight: height } = window
const nParticles = ((width * height) / 250) | 0

const colorCode = [0xffffff, 0xffffff, 0xffffff, 0xcb1b45, 0x113285]
const colorPalette = new Array<string>(nParticles)
  .fill("")
  .map(() => colorCode[Math.floor(Math.random() * (colorCode.length + 1))])

const Particles = ({ count }) => {
  const setColors = new THREE.Color()
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const { size } = useThree()
  const xBounds = width / 20
  const yBounds = height / 20

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array<number>(nParticles)
          .fill(0)
          .flatMap((_, i) => setColors.set(colorPalette[i]).toArray())
      ),
    []
  )

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const speed = Math.random() / 10 + 0.2
      const xPos = Math.random() * xBounds - xBounds / 2
      const yPos = Math.random() * yBounds - yBounds / 2
      const xRandom = 0.005 * (Math.random() - 0.5)
      const ballSize = 0.015 + Math.random() / 50
      temp.push({
        speed,
        xPos,
        yPos,
        xRandom,
        ballSize,
      })
    }
    return temp
  }, [size])

  useRender(() => {
    particles.forEach((particle, i) => {
      let { speed, xPos, yPos, xRandom, ballSize } = particle
      xPos = particle.xPos += xRandom
      yPos = particle.yPos -= (speed + ballSize) * 0.05
      if (xPos > xBounds / 2) xPos = particle.xPos -= xBounds / 2
      else if (xPos < -xBounds / 2) xPos = particle.xPos += xBounds / 2
      if (yPos > yBounds / 2) yPos = particle.yPos -= yBounds
      else if (yPos < -yBounds / 2) yPos = particle.yPos += yBounds

      dummy.position.set(xPos, yPos, -20)
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

export const Background: React.FCX = ({ className }) => {
  return (
    <div className={className}>
      <Canvas
        gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
        camera={{ position: [0, 0, 1.5] }}
        onCreated={({ gl }) => {
          gl.setClearColor("black")
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
      >
        <ambientLight intensity={2} />
        <Particles count={nParticles} />
      </Canvas>
    </div>
  )
}

export const StyledBackground = styled(Background)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`

export default StyledBackground
