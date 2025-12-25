'use client'

import { useEffect } from 'react'

export default function Scripts() {
  useEffect(() => {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement
    const loadingMessage = document.getElementById('loadingMessage')
    const errorMessage = document.getElementById('errorMessage')

    if (contactForm && loadingMessage && errorMessage) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault()

        if (loadingMessage) loadingMessage.style.display = 'block'
        if (errorMessage) errorMessage.style.display = 'none'

        const formData = new FormData(contactForm)
        const name = formData.get('name')
        const email = formData.get('email')
        const subject = formData.get('subject')
        const message = formData.get('message')

        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name as string,
              email: email as string,
              subject: subject as string,
              message: message as string,
            }),
          })

          const data = await response.json()

          if (response.ok) {
            if (loadingMessage) loadingMessage.style.display = 'none'
            contactForm.reset()

            const successDiv = document.createElement('div')
            successDiv.className = 'alert alert-success mt-3'
            successDiv.textContent = 'Message sent successfully!'
            contactForm.appendChild(successDiv)

            setTimeout(() => {
              successDiv.remove()
            }, 3000)
          } else {
            throw new Error(data.error || 'Failed to send message')
          }
        } catch (error) {
          if (loadingMessage) loadingMessage.style.display = 'none'
          if (errorMessage) {
            errorMessage.style.display = 'block'
            errorMessage.textContent = 'Error sending message. Please try again.'
          }
        }
      }

      contactForm.addEventListener('submit', handleSubmit)

      return () => {
        contactForm.removeEventListener('submit', handleSubmit)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initFlyingCarrotAnimation = () => {
      const win = window as any
      if (typeof win.THREE === 'undefined' || typeof win.gsap === 'undefined') {
        return
      }

      const THREE = win.THREE
      const gsap = win.gsap
      
      const internals: any = {}
      internals.W = 500
      internals.H = 500

      internals.randomIntFromInterval = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1) + min)

      internals.materials = {
        orange: new THREE.MeshPhongMaterial({ color: 0xB7513C, flatShading: true }),
        green: new THREE.MeshPhongMaterial({ color: 0x379351, flatShading: true }),
        brown: new THREE.MeshPhongMaterial({ color: 0x5C2C22, flatShading: true }),
        pink: new THREE.MeshPhongMaterial({ color: 0xB1325E, flatShading: true }),
        gray: new THREE.MeshPhongMaterial({ color: 0x666666, flatShading: true }),
        clouds: new THREE.MeshPhongMaterial({ color: 0xeeeeee, flatShading: true }),
        rabbit: new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true })
      }

      internals.shadowSupport = (group: any) => {
        group.traverse((object: any) => {
          if (object instanceof THREE.Mesh) {
            object.castShadow = true
            object.receiveShadow = true
          }
        })
      }

      class Cloud {
        mesh: any
        constructor(config: any) {
          this.mesh = new THREE.Group()
          const cloud = this._createCould()
          this.mesh.position.x = 200
          this.mesh.position.y = config.y || Math.random()
          this.mesh.position.z = config.z || 0
          this.mesh.add(cloud)
          this.animate(config)
        }

        animate(config: any) {
          gsap.to(this.mesh.position, {
            x: -200,
            duration: 3.5,
            repeat: -1,
            delay: config.delay || 0,
            onRepeat: () => {
              this.mesh.position.y = internals.randomIntFromInterval(-10, 20)
            }
          })
        }

        _createCould() {
          const group = new THREE.Group()
          const cloudGeo = new THREE.SphereGeometry(5, 4, 6)
          const cloud = new THREE.Mesh(cloudGeo, internals.materials.clouds)
          cloud.scale.set(1, 0.8, 1)

          const cloud2 = cloud.clone()
          cloud2.scale.set(.55, .35, 1)
          cloud2.position.set(5, -1.5, 2)

          const cloud3 = cloud.clone()
          cloud3.scale.set(.75, .5, 1)
          cloud3.position.set(-5.5, -2, -1)

          group.add(cloud)
          group.add(cloud2)
          group.add(cloud3)

          internals.shadowSupport(group)
          return group
        }
      }

      class Carrot {
        mesh: any
        body: any
        wings: any
        leafs: any
        pilot: any
        constructor() {
          this.mesh = new THREE.Group()
          this.body = this._createBody()
          this.wings = this._createWings()
          this.leafs = this._createLeafs()
          this.pilot = new Pilot()

          this.mesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2)
          this.mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2)
          this.mesh.rotateOnAxis(new THREE.Vector3(0, 0, -1.8), Math.PI / 6)

          this.mesh.add(this.body)
          this.mesh.add(this.wings)
          this.mesh.add(this.leafs)
          this.mesh.add(this.pilot.mesh)

          this.animate()
        }

        animate() {
          gsap.to(this.mesh.rotation, {
            x: -1.7,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          })

          gsap.to(this.leafs.rotation, {
            y: Math.PI,
            duration: 0.1,
            repeat: -1,
            ease: "none"
          })
        }

        _createBody() {
          const group = new THREE.Group()
          const bodyGeom = new THREE.CylinderGeometry(5, 2, 25)
          group.add(new THREE.Mesh(bodyGeom, internals.materials.orange))
          internals.shadowSupport(group)
          return group
        }

        _createWings() {
          const group = new THREE.Group()
          const geometry = new THREE.BoxGeometry(7, 7, 0.5)

          const wingR = new THREE.Mesh(geometry, internals.materials.brown)
          wingR.position.x = 6
          wingR.position.y = 2
          wingR.position.z = 1

          const wingL = wingR.clone()
          wingL.position.x = -6
          wingL.rotation.y = Math.PI

          group.add(wingR)
          group.add(wingL)

          internals.shadowSupport(group)
          return group
        }

        _createLeafs() {
          const group = new THREE.Group()
          const geometry = new THREE.CylinderGeometry(1.5, 1, 5, 4)

          const leafA = new THREE.Mesh(geometry, internals.materials.green)
          leafA.position.y = 16

          const leafB = leafA.clone()
          leafB.position.x = -1.75
          leafB.position.y = 15
          leafB.rotation.z = 0.4

          const leafC = leafB.clone()
          leafC.position.x = leafB.position.x * -1
          leafC.rotation.z = leafB.rotation.z * -1

          group.add(leafA)
          group.add(leafB)
          group.add(leafC)

          internals.shadowSupport(group)
          return group
        }
      }

      class Pilot {
        mesh: any
        pilot: any
        earPivotL: any
        earPivotR: any
        eye: any
        eyeb: any
        constructor() {
          this.mesh = new THREE.Group()
          this.pilot = this._createPilot()
          this.mesh.rotation.x = 1.5
          this.mesh.position.set(0, 7, 5)
          this.mesh.add(this.pilot)
          this.animate()
        }

        animate() {
          gsap.to(this.earPivotL.rotation, {
            x: Math.sin(-Math.PI / 3),
            duration: 0.1,
            repeat: -1,
            yoyo: true
          })

          gsap.to(this.earPivotR.rotation, {
            x: -Math.PI / 2.25,
            duration: 0.1,
            repeat: -1,
            yoyo: true
          })

          gsap.to(this.eye.scale, {
            y: 0.1,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            delay: 5,
            repeatDelay: 3
          })

          gsap.to(this.eyeb.scale, {
            y: 0.1,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            delay: 5,
            repeatDelay: 3
          })
        }

        _createPilot() {
          const group = new THREE.Group()

          const bodyGeo = new THREE.BoxGeometry(5, 5, 5)
          const body = new THREE.Mesh(bodyGeo, internals.materials.rabbit)
          body.position.y = 1
          body.position.z = 4

          const seatGeo = new THREE.BoxGeometry(6, 1, 6)
          const seat = new THREE.Mesh(seatGeo, internals.materials.brown)
          seat.position.set(0, -2.5, 0)
          seat.rotation.set(.25, 0, 0)
          body.add(seat)

          this.earPivotL = new THREE.Object3D()
          this.earPivotL.position.set(0, 2.5, 0)
          this.earPivotL.rotation.x = -Math.PI / 2.25

          this.earPivotR = new THREE.Object3D()
          this.earPivotR.position.set(0, 2.5, 0)
          this.earPivotR.rotation.x = -Math.PI / 3

          const earGeo = new THREE.BoxGeometry(2, 6, 0.5)
          const ear = new THREE.Mesh(earGeo, internals.materials.rabbit)
          ear.position.x = -1.5
          ear.position.y = 2.5

          const earInside = new THREE.Mesh(earGeo, internals.materials.pink)
          earInside.scale.set(.5, .7, .5)
          earInside.position.set(0, 0, .25)
          ear.add(earInside)

          this.earPivotL.add(ear)
          body.add(this.earPivotL)

          const ear2 = ear.clone()
          ear2.position.x = ear.position.x * -1
          this.earPivotR.add(ear2)
          body.add(this.earPivotR)

          const eyeGeo = new THREE.BoxGeometry(0.5, 1, 0.5)
          const eye = new THREE.Mesh(eyeGeo, internals.materials.gray)
          eye.position.set(1, 0.5, 2.5)
          body.add(eye)
          this.eye = eye

          const eyeb = eye.clone()
          eyeb.position.x = eye.position.x * -1
          this.eyeb = eyeb
          body.add(eyeb)

          const noseGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
          const nose = new THREE.Mesh(noseGeo, internals.materials.pink)
          nose.position.set(0, -.5, 2.5)
          body.add(nose)

          const mouthGeo = new THREE.BoxGeometry(.25, 0.25, 0.5)
          const mouth = new THREE.Mesh(mouthGeo, internals.materials.gray)
          mouth.position.set(0, -1.5, 2.5)
          body.add(mouth)

          group.add(body)
          internals.shadowSupport(group)
          return group
        }
      }

      const heroSection = document.getElementById('hero')
      const canvasContainer = document.getElementById('flying-carrot-canvas')

      if (!heroSection || !canvasContainer) {
        return
      }

      const heroRect = heroSection.getBoundingClientRect()
      internals.W = heroRect.width
      internals.H = heroRect.height

      internals.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      internals.renderer.setPixelRatio(window.devicePixelRatio)
      internals.renderer.setClearColor(0xffffff, 0.7)
      internals.renderer.setSize(internals.W, internals.H)
      internals.renderer.shadowMap.enabled = true
      canvasContainer.appendChild(internals.renderer.domElement)

      internals.camera = new THREE.PerspectiveCamera(45, (internals.W / internals.H), 1, 1000)
      internals.camera.position.set(40, 20, 100)
      internals.scene = new THREE.Scene()
      internals.scene.fog = new THREE.Fog(0xffffff, 100, 300)
      internals.scene.add(internals.camera)

      const directional = new THREE.DirectionalLight(0xffffff, 1)
      directional.position.set(30, 20, 0)
      directional.castShadow = true
      internals.scene.add(new THREE.AmbientLight(0xffffff, 1))
      internals.scene.add(directional)

      const floor = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), new THREE.MeshBasicMaterial({ color: 0xe0dacd }))
      floor.rotation.x = -Math.PI / 2
      floor.position.y = -100
      internals.scene.add(floor)

      const carrot = new Carrot()
      carrot.mesh.position.set(80, 10, 10)
      internals.scene.add(carrot.mesh)

      if (window.innerWidth > 768) {
        internals.scene.add(new Cloud({ y: -5, z: 20 }).mesh)
        internals.scene.add(new Cloud({ y: 0, z: 10, delay: 1 }).mesh)
        internals.scene.add(new Cloud({ y: 15, z: -10, delay: .5 }).mesh)
        internals.scene.add(new Cloud({ y: -15, z: 10, delay: 2 }).mesh)
      }

      internals.render = () => internals.renderer.render(internals.scene, internals.camera)
      gsap.ticker.add(internals.render)

      internals.resizeHandler = () => {
        const heroRect = heroSection.getBoundingClientRect()
        internals.W = heroRect.width
        internals.H = heroRect.height
        internals.renderer.setSize(internals.W, internals.H)
        internals.camera.aspect = internals.W / internals.H
        internals.camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', internals.resizeHandler, false)
      internals.resizeHandler()
    }

    const checkAndInit = () => {
      const win = window as any
      if (typeof win.THREE !== 'undefined' && typeof win.gsap !== 'undefined') {
        setTimeout(() => {
          initFlyingCarrotAnimation()
        }, 100)
      } else {
        setTimeout(checkAndInit, 100)
      }
    }

    checkAndInit()
  }, [])

  return null
}

