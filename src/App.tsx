import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './client/pages/HomePage'
import Client from './client/layouts/ClientLayout'
import { ProductType } from './types/product'
import { create, list, remove, update } from './api/product'
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
import { listCate } from './api/category'
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<ProductType[]>([]);
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
    getCategory()
  }, [])
  const onHandleRemove = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id != id))
  }
  const onHandleAdd = async (product: any) => {
    const { data } = await create(product);
    setProducts([...products, data])
  }
  const onHandleEdit = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id === data._id ? product : item))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Client />}>
          <Route index element={<HomePage products={products} categories={categories} />} />
          <Route path='product'>
            <Route index element={<ProductPage products={products} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>

        </Route>
        <Route path='login' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='admin' element={<PrivateRoute><Admin /></PrivateRoute>}>
          <Route index element={<DashBoard />} />
          <Route path='product'>
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path='edit/:id' element={<ProductEdit onEdit={onHandleEdit} />} />
          </Route>
          <Route path='category'>
            <Route index element={<Category />} />
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
