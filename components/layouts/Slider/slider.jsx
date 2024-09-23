
const Slider = () => {
  return (
    <div>
      <section className="border-solid max-w-full h-screen ">
        <div className="flex">
          <article className=" inline-block h-full w-1/3 bg-slate-200">
            <h1 className="font-bold text-black text-7xl w-fit p-9 text-center">Play, Learn, and Grow with Our Toys!</h1>
            <div className="mt-[27px] text-center p-5">
            <p>Nhập code <b>NToys29</b>để giảm 29k từ đơn 119k</p>
            <br />
            <p>Nhập code <b>NToys79</b>để giảm 79k từ đơn 219k</p>
            <br />
            <p>Nhập code <b>NToys119</b>để giảm 1199k từ đơn 1599k</p>
            <br />
            <p>Nhập code <b>NToys159</b>để giảm 159k từ đơn 2499k</p>
            <br />
            <button className="bg-black text-white w-32 h-12 m-1">
             <a href="#">SHOP NOW</a> 
             {/* /* CÁI NÀY TAO SẼ ONCLICK SAU NHÉ */ }
            </button>
            </div>
          </article>
          <article className="flex h-full w-2/3">
            <img className="w-full object-cover h-full " src="https://curnonwatch.com/wp-content/uploads/2024/08/Banner-Website.jpg" alt="" />
          </article>
        </div>
    </section>
    </div>
  )
}

export default Slider
