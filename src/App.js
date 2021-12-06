import React, { Component } from 'react'
import { ProductsContextProvider } from './Global/ProductsContext'
import { Home } from './Components/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'
import { Profile } from './Components/Profile'
import { CashoutInstallmental } from './Components/CashoutInstallmental'
import { HomePage } from './Components/HomePage'
import TermsCondition from './Components/TermsCondition'
import { ProductCategory } from './Components/ProductCategory'
import { ProductCategoryOne } from './Components/ProductCategoryOne'
import { ProductCategoryThree } from './Components/ProductCategoryThree'
import { ProductCategoryFour } from './Components/ProductCategoryFour'
import { ProductCategoryTwo } from './Components/ProductCategoryTwo'

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <Router>
                        <Switch>
                            {/* home */}
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            {/* home */}
                            <Route exact path='/browse' component={() => <HomePage user={this.state.user} />} />
                            {/* profile */}
                             <Route exact path='/profile' component={() => <Profile user={this.state.user} />} />
                            {/* product category */}
                            <Route exact path='/productCategory' component={() => <ProductCategory user={this.state.user} />} />
                            {/* categories */}
                            {/* categories */}
                            {/* categories */}
                            <Route exact path='/watch' component={() => <ProductCategoryOne user={this.state.user} />} />
                            <Route exact path='/tv' component={() => <ProductCategoryTwo user={this.state.user} />} />
                            <Route exact path='/phones' component={() => <ProductCategoryThree user={this.state.user} />} />
                            <Route exact path='/speaker' component={() => <ProductCategoryFour user={this.state.user} />} />

                            {/* categories */}
                            {/* categories */}
                            {/* categories */}
                            {/* categories */}
                            
                            
                            {/* signup */}
                            <Route path="/signup" component={Signup} />
                            {/* login */}
                            <Route path="/login" component={Login} />
                            {/* terms and condition */}
                            <Route exact path='/terms' component={() => <TermsCondition user={this.state.user} />} />
                            {/* cart products */}
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                            {/* add products */}
                            <Route path="/addproducts" component={AddProducts} />
                            {/* cashout */}
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
                            {/* cashout installmenntal */}
                            <Route path='/cashoutInstallmental' component={() => <CashoutInstallmental user={this.state.user} />} />

                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default App
