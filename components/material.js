import React from 'react'

export class Material extends React.Component {
  static async getInitialProps ({ props }) {
    return props
  }
  render () {
    return <div>
      MaterialUI data {this.props.reduxdata}
    </div>
  }
}
