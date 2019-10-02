import React, {Component} from 'react'
import './App.css'

import Card from './../Card/Card'
import Filter from "../Filter/Filter";

import GetDataServer from './../Services/getData'

class App extends Component {

  getDataServer = new GetDataServer()

    componentDidMount() {
        this.getDataServer.getData().then((body) => {
                this.setState({
                    goods: body
                })
            }
        )
    }

    state = {
      goods: [],
      radio: '',
      category: '0',
      inStock: false
  }

    delCard = (id) => {
        this.setState(({goods}) => {
            const idx = goods.findIndex((el) => el.id===id)
            return {
                goods: [...goods.slice(0, idx), ...goods.slice(idx+1)]
            }
        })
    }

    onRadio = (radioValue) => {
      this.setState({
          radio: radioValue
      })
    }

    filterRadio = (items, radio) => {
            switch (radio) {
                case 'less': return items.filter((item)=>item.price < 5000)
                case 'more': return items.filter((item)=>item.price >= 5000)
                default :return items
            }
    }


    onSelected = (categoryValue) => {

        this.setState({
            category: categoryValue
        })
    }

    filterCategory = (items, category) => {

        switch (category) {
            case '1': return items.filter((item)=>item.category.id === 1)
            case '2': return items.filter((item)=>item.category.id === 2)
            case '3': return items.filter((item)=>item.category.id === 3)
            case '4': return items.filter((item)=>item.category.id === 4)

            default :return items
        }
    }


    onCheck = (checkValue) => {
        this.setState({
            inStock: checkValue
        })
    }

    filterCheck = (items, inStock) => {
        switch (inStock) {
            case false: return items
            case true: return items.filter((item)=>item.quantity > 0)
            default :return items
        }
    }


    render() {
        const {goods, radio, category, inStock}  = this.state
        const visibleItems =  this.filterCheck(
                                    this.filterCategory(
                                        this.filterRadio(goods, radio), category), inStock)


        const cards = visibleItems.map((el) => {
            return (
                <Card key={el.id} info={el} delCard={(id)=>this.delCard(id)} />
            )
        })

        return (
                <div className="listCards">
                    <Filter
                        onRadio={(radioValue)=>this.onRadio(radioValue)}
                        onSelected={(categoryValue)=>this.onSelected(categoryValue)}
                        onCheck={(checkValue)=>this.onCheck(checkValue)}

                    />
                    {cards}
                </div>
        )
  }
}

export default App


