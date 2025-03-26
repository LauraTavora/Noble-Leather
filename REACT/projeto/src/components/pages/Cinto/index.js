import Banner from '../../../assets/Group 44.svg';
import Image15 from '../../../assets/image (15).svg';
import Image16 from '../../../assets/image (16).svg';
import Image17 from '../../../assets/image (17).svg';
import Image18 from '../../../assets/image (18).svg';
import Image19 from '../../../assets/image (19).svg';
import Image20 from '../../../assets/image (20).svg';
import Image21 from '../../../assets/image (21).svg';
import Image22 from '../../../assets/image (22).svg';
import Image23 from '../../../assets/image (23).svg';
import WishlistIcon from '../../../assets/curtida.svg';
import CartIcon from '../../../assets/loja.svg';
import Stars from '../../../assets/estrelas.svg';
import Style from './Cinto.module.css'




function Bolsa(){
    return (
        
        <>
          {/* <Navbar/> */}

          <section className={Style.banner}>
                <img src={Banner} alt="Banner Jaquetas Femininas" />
                <h2>Jaquetas</h2>
                <h2>Femininas</h2>
            </section>
            <nav className={Style.categories}>
                <a href="#">Feminino</a>
                <a href="#">Masculino</a>
            </nav>
            <section className={Style.products}>
                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image15} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image16} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image17} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image18} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image19} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image20} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image21} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image22} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={Style.product_card}>
                    <div className={Style.product_image}>
                        <img src={Image23} alt="Jaqueta de couro" />
                        <span className={Style.wishlist_icon}><img src={WishlistIcon} alt="" /></span>
                        <span className={Style.cart_icon}><img src={CartIcon} alt="" /></span>
                    </div>
                    <div className={Style.product_info}>
                        <h3>Jaqueta de couro sintético vintage</h3>
                        <div className={Style.stars}><img src={Stars} alt="" /></div>
                        <p className={Style.price}>R$ <span>90,00</span></p>
                        <div className={Style.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer/> */}


            <br /><br /><hr /><br /><br /><br />
            
        </>
    );
}

export default Bolsa;



