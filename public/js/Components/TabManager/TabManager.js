import { h, Component } from 'preact'

/**
 * TabManager 
 * @prop titles : Son los Titulos de cada uno de los tabs
 * @prop components : Los Componentes que corresponden a cada tab, puede ser
 *    un componente como tal, o un import dinamico
 **/
class TabManager extends Component {
  state = {
    componentIndex: 0
  }

  setIndex = index => e => this.setState({ componentIndex: index })

  render({ titles, components }, { componentIndex }) {
    return (
      <div>
        <div class="tab-header">
          {titles.map((el, i) => <div onClick={this.setIndex(i)}> {el} </div>)}
        </div>
        <div class="tab-content">
          {components[componentIndex]}
        </div>
      </div>)

  }
}