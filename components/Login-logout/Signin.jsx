
const Signin = () => {
  return (
    <div>
      <section>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex ">
        <form action="#" className="pt-6 text-center space-x-4">
        <h1 className="font-bold p-2">Email</h1>
        <input type="email" name="email" placeholder="name@gmail.com" required className="border-2" />
        <h1 className="font-bold p-2">Password</h1>
        <input type="password" placeholder="*" required className="border-2" minLength={6} maxLength={15}/> <br />
        <button className="bg-blue-400 p-2 m-2">Submib</button> 
        {/* Tôi sẽ onclick vào button để check mk  */}
    </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Signin
