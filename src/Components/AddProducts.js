import React, { useState } from 'react'
import { storage, db } from '../Config/Config'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [productCategory, setProductCatergory] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        setLoading(true);
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err =>{
            setLoading(false);
            setError(err.message)
        }, () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImg: url,
                        ProductCategory:productCategory
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0)
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                        setLoading(false);
                        toast.info('Product added to database   ', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                        });
                    }).catch(err => {
                        setLoading(false);
                        setError(err.message)
                    })
                })
            })
    }

    return (
        <div className='container'>
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                <br />
                <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                    setProductCatergory(e.target.value)
                }}>
                    <option selected disabled>Open this select menu</option>
                    <option value="watches">Watch</option>
                    <option value="tv">Tv</option>
                    <option value="phone">Phone</option>
                    <option value="speaker">Speaker</option>
                    <option value="others">Others</option>
                </select>
                <br/>
                <br/>
                <button type="submit" className='btn btn-success btn-md mybtn'>
                    {!loading && 
                        <span>
                            ADD
                        </span>
                    }
                    {loading &&
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }

                    
                </button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
    )
}
