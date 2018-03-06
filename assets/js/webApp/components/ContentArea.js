import React, { Component} from 'react'

export default class ContentArea extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Johnny'
    }
  }
  clickedBtn = () => {
    console.log('')
  }

  render () {
    return (
      <section id={'content-area'}>

        <div className={'col-md-6 model'}>
          <img src={'/img/bape2.png'} alt='' />
        </div>

        <div className={'col-md-6 info'}>
          <div className={'insider'}>

            <h5>Mens</h5>
            <h1>JACKET</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={'size'}>
              <div className={'title'}>
                Size
              </div>
                <ul className={'sizes'}>
                  <li className={'circle'}>S</li>
                  <li className={'circle'}>M</li>
                  <li className={'circle'}>L</li>
                  <li className={'semi-circle'}>XL</li>
                  <li className={'semi-circle'}>XXL</li>
                  <li className={'semi-circle'}>CUSTOM</li>
                </ul>
              </div>

          <div className={'action-btns'}>
            <a className={'col-md-6 red-hollow-btn'}>
              <span className={'col-md-6 price'}>
              $545
            </span>
            ADD TO CART
            </a>
            <a className={'col-md-6 light-grey-btn'}>
             FIND A STORE
            </a>
          </div>
          </div>
          </div>
          </section>
        )
  }
}
