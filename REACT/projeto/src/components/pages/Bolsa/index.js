import Banner from '../../../assets/Group 46.svg';
import Image5 from '../../../assets/image (5).svg';
import Image6 from '../../../assets/image (6).svg';
import Image7 from '../../../assets/image (7).svg';
import Image8 from '../../../assets/image (8).svg';
import Image9 from '../../../assets/image (9).svg';
import Image10 from '../../../assets/image (10).svg';
import Image11 from '../../../assets/image (11).svg';
import Image12 from '../../../assets/image (12).svg';
import Image13 from '../../../assets/image (13).svg';
import WishlistIcon from '../../../assets/curtida.svg';
import CartIcon from '../../../assets/loja.svg';
import Stars from '../../../assets/estrelas.svg';
import Style from './Bolsa.module.css'

function Bolsa(){
    return (
        <>
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
                        <img src={Image5} alt="Jaqueta de couro" />
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
                        <img src={Image6} alt="Jaqueta de couro" />
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
                        <img src={Image7} alt="Jaqueta de couro" />
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
                        <img src={Image8} alt="Jaqueta de couro" />
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
                        <img src={Image9} alt="Jaqueta de couro" />
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
                        <img src={Image10} alt="Jaqueta de couro" />
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
                        <img src={Image11} alt="Jaqueta de couro" />
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
                        <img src={Image12} alt="Jaqueta de couro" />
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
                        <img src={Image13} alt="Jaqueta de couro" />
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



            <br /><br /><hr /><br /><br /><br />
            
        </>
    );
}

export default Bolsa;



