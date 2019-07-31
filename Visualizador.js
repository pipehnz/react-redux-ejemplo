import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNumero, incrementNumero } from './actions.js'

class Visualizador extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    const { numero, incrementNumero } = this.props
    return (
      <div  className="text-center">
        <h1 className="display-1">{ numero }</h1>
        <button className="btn btn-primary" onClick={ incrementNumero }>Incrementar</button>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  return {
    numero: state.numero
  }
}

const mapDispatchToProps = {  
  getNumero,
  incrementNumero
}



export default connect(mapStateToProps, mapDispatchToProps)(Visualizador)