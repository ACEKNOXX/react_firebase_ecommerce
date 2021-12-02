import React, { createContext } from 'react'
import { auth, db } from '../Config/Config'

export const PurchaseHistoryContext = createContext();

export class PurchaseHistoryContextProvider extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {

        const prevProducts = this.state.productsHistory;
        auth.onAuthStateChanged(user => {
            db.collection('Buyer-info ' + user.uid).onSnapshot(snapshot => {
                let changes = snapshot.docChanges();
                changes.forEach(change => {
                    if (change.type === 'added') {
                        prevProducts.push({
                            ProductID: change.doc.id,
                            ProductName: change.doc.data().ProductName,
                            ProductPrice: change.doc.data().ProductPrice,
                            ProductImg: change.doc.data().ProductImg
                        })
                    }
                    this.setState({
                        productsHistory: prevProducts
                    })
                })
            })
        })

    }
    render() {
        return (
            <PurchaseHistoryContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </PurchaseHistoryContext.Provider>
        )
    }
}

