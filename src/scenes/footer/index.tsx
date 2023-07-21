import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
             <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img src={Logo} alt="logo" />
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consectetur accusamus sint tempore explicabo nobis ex debitis quod, dolor incidunt neque itaque laudantium libero mollitia ipsum dolores molestiae veritatis vero.</p>&copy; Evogym All Right Reserved
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Home for all</p>
                    <p className="my-5">About us all</p>
                    <p>Socials for everyone</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Twitter for vawulence</p>
                    <p className="my-5">Instagram for the boys</p>
                    <p>(+234)7019438002</p>
                </div>
                <div></div>
             </div>
    </footer>
  ) 
}

export default Footer