import React, { Component } from "react"

class DrawBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descriptors: null,
      detections: null,
      match: null,
    }
  }

  componentDidMount() {
    this.getDescription()
  }

  componentWillReceiveProps(newProps) {
    this.getDescription(newProps)
  }

  getDescription = async (props = this.props) => {
    const { fullDesc, faceMatcher } = props
    if (!!fullDesc) {
      await this.setState({
        descriptors: fullDesc.map((fd) => fd.descriptor),
        detections: fullDesc.map((fd) => fd.detection),
      })
      if (!!this.state.descriptors && !!faceMatcher) {
        let match = await this.state.descriptors.map((descriptor) =>
          faceMatcher.findBestMatch(descriptor)
        )
        if (match.length > 0 && match[0]._label != "unknown") {
          // Expresión regular para capturar cualquier número
          let regex = /\b\d+\b/
          let valor = match[0]._label.match(regex)
          if (valor) {
            match[0].codigo = valor[0]
          }
          console.log(match[0])

          //construimos objeto con los datos del usuario
          let user = {
            codigo: match[0].codigo,
            nombre: match[0]._label,
            fecha: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
          }

          //actualizamos localStorage
          let asistencia = JSON.parse(localStorage.getItem("asistencia")) || []
          //verificamos si el usuario ya registro asistencia
          let existe = asistencia.find((a) => a.codigo == user.codigo)
          if (!existe) {
            asistencia.push(user)
            localStorage.setItem("asistencia", JSON.stringify(asistencia))
          }
        }
        this.setState({ match })
      }
    }
  }

  render() {
    const { imageWidth, boxColor } = this.props
    const { detections, match } = this.state
    let box = null

    if (!!detections) {
      box = detections.map((detection, i) => {
        const relativeBox = detection.relativeBox
        const dimension = detection._imageDims
        let _X = imageWidth * relativeBox._x
        let _Y =
          (relativeBox._y * imageWidth * dimension._height) / dimension._width
        let _W = imageWidth * relativeBox.width
        let _H =
          (relativeBox.height * imageWidth * dimension._height) /
          dimension._width
        return (
          <div key={i}>
            <div
              style={{
                position: "absolute",
                border: "solid",
                borderColor: boxColor,
                height: _H,
                width: _W,
                transform: `translate(${_X}px,${_Y}px)`,
              }}
            >
              {!!match && match[i] && match[i]._label !== "unknown" ? (
                <p
                  style={{
                    backgroundColor: boxColor,
                    border: "solid",
                    borderColor: boxColor,
                    width: _W,
                    marginTop: 0,
                    color: "#fff",
                    transform: `translate(-3px,${_H}px)`,
                  }}
                >
                  {match[i]._label}
                </p>
              ) : null}
            </div>
          </div>
        )
      })
    }

    return <div>{box}</div>
  }
}

export default DrawBox
