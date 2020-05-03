import React,{useState,useEffect,useContext} from 'react'
import {obj} from './Dummy';
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom';
import AuthContext, { User } from './AuthContext';
function Products() {
    const { username }=useContext(User);
   const [Product, setProduct] = useState(obj);
   const [Table, setTable] = useState([]);
   const [Wishlist, setWishlist] = useState([])
    const addItem = (id) => {
        const itemId = obj.findIndex(x => {
          return x.id === id;
        });
        obj[itemId].flag = false;
        setTable(y => [...y, obj[itemId]]);
      }
  
      const delItem = (id) => {
        const itemId = obj.findIndex(x => {
          return x.id === id;
        });
        obj[itemId].flag = true;
        setTable(currentItems => {
          return currentItems.filter((y) => y.id!==id);
        });
      }
      const addCart = (id) => {
        const itemnum = obj.findIndex(x => {
          return x.id === id;
        });
        obj[itemnum].cart_flag = false;
        setWishlist(y => [...y, obj[itemnum]]);
      }
  
      const delCart = (id) => {
        const itemnum = obj.findIndex(x => {
          return x.id === id;
        });
        obj[itemnum].cart_flag = true;
        setWishlist(currentItems => {
          return currentItems.filter((y) => y.id!==id);
        });
      }
      
    if(!Table.length==0)
    {
        var table_data= <table className="table table-bordered text-center m-5 ">
        <tr>
            <th>Model</th>
             {Table.map((val)=>{
            return (
                <th> {val.brand}-{val.name} </th>   
                )
            }
            )}
        </tr>
        <tr>
            <th>Price</th>
                {Table.map((val)=>{
                return (
                    <th> {val.price} </th>   
                    )
                }
                )}
        </tr>
        <tr>
            <th>colors</th>
                {Table.map((val)=>{
                return (
                    <th> {val.color} </th>   
                    )
                }
                )}
        </tr>
        <tr>
            <th>Output</th>
                {Table.map((val)=>{
                return (
                    <th> {val.output} </th>   
                    )
                }
                )}
        </tr>
        <tr>
            <th>Wireless</th>
                {Table.map((val)=>{
                return (
                    <th> {val.wireless} </th>   
                    )
                }
                )}
        </tr>
    </table>
    }
    let total = 0;
    Wishlist.map(temp => {
        total = total+temp.price;
    })
    return (
        <div>
            <nav className="navbar navbar-expand-sm  bg-dark navbar-dark ">
               <Link to="/product" className="navbar-brand">E-Kart</Link>

                <ul className="navbar-nav ml-auto d-flex align-items-center mr-3" style={{color:"white"}}>
                    <h3>Welcome ,{username}! </h3>
                    <li className="nav-item">
                       
                        <button type="button"  className="btn btn-dark" data-toggle="modal" data-target="#wishlist">
                             <i className="fas fa-shopping-cart"></i> Cart
                        </button>
                    </li>
                    
                     <Link to="/" style={{color:"white"}} > 
                      <i className="fas fa-sign-out-alt" ></i>
                    Logout
                </Link>
                </ul>
               
            </nav>
            <div className="modal" id="wishlist">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Items</h2>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group m-3">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p>Total items :{Wishlist.length}</p>
                                    </div>
                                    <div class="col-md-6">
                                        Grand Total : {
                                            
                                           total
                                        }
                                    </div>
                                </div>
                                
                                {
                                    Wishlist.map((val)=>{
                                        return(
                                            <li className="list-group-item row">
                                                <div className="col">
                                                    <img src={(val.name)+".jpg"} className="mr-3" height="40" width="40"   alt="Unavailable" />
                                                </div>
                                                <div className="col">
                                                    <p> {val.brand}-{val.name} </p>
                                                    <strong> Rs{val.price}/- </strong>
                                                </div>
                                            </li>
                                        );
                                    }
                                    )
                                }
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                    {Product.map((temp)=>{
                        return (<div className="card mt-3">
                            <img src={(temp.name)+".jpg"} className="card-img-top" height="200s" width="40"   alt="Unavailable" />
                            {temp.flag ? (
                                <button className=" btn btn-primary" onClick={() => addItem(temp.id)}>Compare</button>
                            ) : (
                                <button className=" btn btn-secondary" onClick={()=>delItem(temp.id)}>Remove</button>
                            )}
                            
                            <div className="card-body text-center">
                                <strong> {temp.brand}-{temp.name} </strong><br/>
                                <strong> Rs{temp.price}/- </strong>
                                
                            </div>
                            {temp.cart_flag ? (
                                <button className=" btn btn-outline-danger" onClick={() => addCart(temp.id)}>Add to Cart</button>
                            ) : (
                                <button className=" btn btn-danger" onClick={()=>delCart(temp.id)}>Remove from Cart</button>
                            )}

                        </div>);

                    })}
                </div>
                </div>
                <div className="row">
                    <div>
                        {table_data}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Products
