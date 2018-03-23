import React from 'react';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

export default class FilterProductList extends React.Component {
  render () {
    return (
        <div className="container">
          <SearchBar />
          <ProductTable product={PRODUCTS}/>
        </div>
    )
  }
}
class SearchBar extends React.Component {
  render () {
    return (
        <div className="search-Bar">
          <input placeholder="search..."/>
          <input id="showStock" type="checkBox" /><label for="showStock">Only show products in stock</label>
        </div>
    )
  }
}
class ProductTable extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    let lastCategory = '';
    return this.props.product.map(item => {
      return (
         <table className="product-table">
          {(lastCategory != item.category) ?
          <ProductCategoryRow category={item.category}/>
          : ''}
          <ProductRow price={item.price} name={item.name}/>
        </table>
      )
      lastCategory = item.category;
    });
  }
}
class ProductCategoryRow extends React.Component {
  render () {
    return (
        <tr>
            <th>{this.props.category}</th>    
        </tr>
    )
}
}
class ProductRow extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.name}</td>    
                <td>{this.props.price}</td>    
            </tr>
        )
    }
}
  