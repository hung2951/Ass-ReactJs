import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './client/pages/HomePage'
import Client from './client/layouts/ClientLayout'
import { ProductType } from './types/product'
import { create, getOne, list, remove, search, update } from './api/product'
import DashBoard from './admin/pages/DashBoard'
import Admin from './admin/layouts/AdminLayout'
import ProductManager from './admin/pages/ProductManager'
import ProductAdd from './admin/pages/ProductAdd'
import ProductEdit from './admin/pages/ProductEdit'
import ProductPage from './client/pages/ProductPage'
import ProductDetail from './client/pages/ProductDetail'
import PrivateRoute from './admin/pages/PrivateRoute'
import SignIn from './client/pages/SignIn'
import SignUp from './client/pages/SignUp'
import Category from './admin/pages/Category'
import { createCate, listCate, removeCate } from './api/category'
import ProductCate from './client/pages/ProductCate'
import User from './admin/pages/User'
import { listUser } from './api/user'
import { UserType } from './types/user'
import ProductSearch from './client/pages/ProductSearch'
import { addToCart, decrease, increase, removeCart } from './ultils/cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './client/pages/Cart'
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  useEffect(() => {
    // sản phẩm
    const getProduct = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProduct();
    // danh mục
    const getCategory = async () => {
      const { data } = await listCate();
      setCategories(data)
    }
    getCategory();
    // user
    const getUser = async () => {
      const { data } = await listUser();
      setUsers(data)
    }
    getUser()
  }, [])
  //product
  const onHandleRemove = (id: number) => {
    const confirm = window.confirm('Bạn có muốn xóa không?');
    if (confirm) {
      remove(id);
      setProducts(products.filter(item => item._id != id))
    }

  }
  const onHandleAdd = async (product: any) => {
    const { data } = await create(product);
    setProducts([...products, data])
  }
  const onHandleEdit = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id === data._id ? product : item))
  }
  // category
  const onHandleAddCate = async (product: any) => {
    const { data } = await createCate(product);
    setCategories([...categories, data])
  }
  const onHandleRemoveCate = (id: number) => {
    const confirm = window.confirm('Bạn có muốn xóa không?');
    if (confirm) {
      removeCate(id);
      setCategories(categories.filter(item => item._id != id))
    }

  }
  //cart
  const onHandleAddToCart = async (id: number) => {
    const { data } = await getOne(id);
    addToCart({ ...data, quantity: 1 }, () => {
      toast.success(`Đã thêm ${data.name} vào giỏ hàng!`)
    })
  }
  const onHandleIncrease = (id: number) => {
    increase(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  const onHandleDecrease = (id: number) => {
    decrease(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  const onHandleRemoveCart = (id: number) => {
    removeCart(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path='/' element={<Client />}>
          <Route index element={<HomePage products={products} categories={categories} />} />
          <Route path='product'>
            <Route index element={<ProductPage products={products} />} />
            <Route path=':id' element={<ProductDetail onAddToCart={onHandleAddToCart} />} />
          </Route>
          {/* category */}
          <Route path='danh-muc/:id' element={<ProductCate categories={categories} />} />
          {/* search */}
          <Route path='search' element={<ProductSearch />} />
          {/* cart */}
          <Route path='cart' element={<Cart onIncrease={onHandleIncrease} onDecrease={onHandleDecrease} onRemoveCart={onHandleRemoveCart} />} />
        </Route>
        {/* end client */}
        {/* login */}
        <Route path='login' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />

        {/* admin */}
        <Route path='admin' element={<PrivateRoute><Admin /></PrivateRoute>}>
          <Route index element={<DashBoard />} />
          <Route path='product'>
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<ProductAdd onAdd={onHandleAdd} categories={categories} />} />
            <Route path='edit/:id' element={<ProductEdit onEdit={onHandleEdit} categories={categories} />} />
          </Route>
          <Route path='category'>
            <Route index element={<Category onAddCate={onHandleAddCate} categories={categories} onRemoveCate={onHandleRemoveCate} />} />
          </Route>
          <Route path='user' element={<User users={users} />} />
        </Route>

      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App
