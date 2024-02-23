import {useState} from "react"
import "./index.css";

export default ({
  setOpenModal,
    openModal}) => 
{

  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [post, setPost] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState()




  const closeHandler = () => {
    setOpenModal(false)
  }

  const handler = (e) => {
    const data = {
      name,
      org,
      post,
      email,
      number
    }
    console.log(data);
    closeHandler();
  }


  return <div className="modal-wrapper">
    <div className="modal">
      <div className="modal__close" onClick={closeHandler}>
      <i class="fa fa-times" aria-hidden="true" onClick={(e) => {}}></i>
      </div>
      <div className="modal__content">
        <svg width="89" height="91" viewBox="0 0 89 91" fill="none"   xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_83_278)">
    <path d="M12.7595 41.8636H23.0038V44.9524H16.0843V47.792H22.6248V50.8866H16.0843V53.9811H23.3885V57.0757H12.7595V41.8636Z" fill="#F3F7EF" />
    <path d="M26.0527 41.8636H31.0313C32.1919 41.8564 33.349 41.9926 34.4767 42.2692C35.5022 42.5135 36.4687 42.9628 37.3191 43.5905C38.1414 44.2153 38.8031 45.0301 39.2486 45.9665C39.7531 47.0777 39.9967 48.2913 39.9606 49.5131C39.9836 50.636 39.7477 51.7489 39.2715 52.7641C38.8261 53.6791 38.1894 54.4857 37.4053 55.1285C36.6015 55.7793 35.6842 56.2726 34.7007 56.583C33.66 56.9122 32.5755 57.0783 31.485 57.0756H26.0585L26.0527 41.8636ZM29.3718 53.981H31.0945C31.8151 53.9855 32.5339 53.9057 33.2364 53.7434C33.8581 53.6059 34.4447 53.3395 34.9591 52.9611C35.4557 52.5849 35.8506 52.0887 36.1075 51.5181C36.4017 50.8311 36.5429 50.0873 36.521 49.3392C36.5367 48.6664 36.395 47.9993 36.1075 47.3921C35.8436 46.8568 35.4604 46.3907 34.9878 46.0302C34.4942 45.6583 33.9348 45.385 33.3397 45.2247C32.6911 45.0419 32.0206 44.9502 31.3471 44.9523H29.389L29.3718 53.981Z" fill="#F3F7EF" />
    <path d="M20.0922 67.0663C19.8038 66.7113 19.4215 66.446 18.9897 66.3014C18.57 66.1463 18.1273 66.064 17.6804 66.058C17.4311 66.0589 17.1826 66.0881 16.9397 66.1449C16.6875 66.1996 16.444 66.2893 16.2162 66.4115C15.99 66.5241 15.7933 66.6889 15.6419 66.8925C15.4984 67.108 15.4242 67.363 15.4295 67.6226C15.419 67.8278 15.4605 68.0322 15.5499 68.2167C15.6393 68.4012 15.7737 68.5597 15.9405 68.6773C16.3366 68.9485 16.77 69.1594 17.2268 69.3032C17.7493 69.4713 18.3063 69.6451 18.9035 69.819C19.4907 69.9851 20.0528 70.2307 20.5746 70.5491C21.0939 70.8648 21.5341 71.2971 21.8608 71.8125C22.2302 72.4592 22.4076 73.1995 22.3719 73.9451C22.3902 74.7101 22.2288 75.4687 21.901 76.1588C21.603 76.7703 21.171 77.3054 20.6377 77.7234C20.0845 78.1504 19.4547 78.4652 18.783 78.6507C18.0593 78.8528 17.3116 78.9542 16.5607 78.952C15.6324 78.9614 14.7096 78.8084 13.8331 78.5C12.9621 78.1785 12.165 77.6817 11.4902 77.0396L13.8561 74.4145C14.1934 74.8694 14.6347 75.2352 15.1423 75.4808C15.8951 75.8565 16.7543 75.9549 17.5713 75.7589C17.8328 75.6994 18.0842 75.6018 18.3178 75.4692C18.5286 75.3475 18.7093 75.1791 18.8461 74.9766C18.9944 74.7689 19.0747 74.5197 19.0758 74.2638C19.082 74.054 19.0377 73.8458 18.9467 73.657C18.8557 73.4683 18.7207 73.3046 18.5533 73.1801C18.1506 72.8954 17.7072 72.6746 17.2383 72.5253C16.71 72.3398 16.1358 72.1467 15.5156 71.9458C14.9135 71.7653 14.3351 71.5123 13.7929 71.1924C13.2711 70.8791 12.8241 70.4537 12.4837 69.9465C12.1111 69.3346 11.929 68.624 11.9611 67.9066C11.9446 67.1608 12.1102 66.4225 12.4435 65.7566C12.7545 65.1552 13.1891 64.6277 13.7182 64.2093C14.2683 63.7829 14.8939 63.4662 15.5615 63.2763C16.2605 63.0671 16.9859 62.9617 17.7149 62.9634C18.5513 62.9616 19.3834 63.0846 20.1841 63.3285C20.9801 63.5724 21.7132 63.9898 22.3317 64.5512L20.0922 67.0663Z" fill="#F3F7EF" />
    <path d="M24.8584 63.3518H30.4571C31.2013 63.3471 31.944 63.4189 32.6737 63.5662C33.3237 63.6874 33.9428 63.9397 34.494 64.308C35.0184 64.6651 35.4435 65.1519 35.7286 65.722C36.0567 66.4239 36.2142 67.1947 36.188 67.9704C36.2105 68.7366 36.0654 69.4984 35.763 70.2015C35.5063 70.7722 35.1114 71.2685 34.6146 71.6445C34.0833 72.0182 33.4811 72.2767 32.8459 72.4037C32.1173 72.5594 31.3742 72.6351 30.6294 72.6297H28.2004V78.5638H24.8814L24.8584 63.3518ZM28.1775 69.7959H30.394C30.6833 69.7968 30.9719 69.7677 31.2553 69.709C31.5193 69.6583 31.7722 69.5601 32.0018 69.4192C32.2251 69.2742 32.4088 69.075 32.5359 68.8397C32.6781 68.5647 32.7473 68.2573 32.7368 67.9473C32.751 67.6138 32.6584 67.2846 32.4727 67.0085C32.2923 66.7734 32.0577 66.5864 31.7894 66.4637C31.4968 66.33 31.1845 66.2458 30.8648 66.2145C30.5386 66.1806 30.2109 66.1632 29.8829 66.1624H28.1602L28.1775 69.7959Z" fill="#F3F7EF" />
    <path d="M41.6603 63.3517H44.4052L50.9629 78.5637H47.2131L45.9154 75.3417H40.064L38.8064 78.5637H35.1543L41.6603 63.3517ZM42.9351 67.7733L41.1033 72.5253H44.7899L42.9351 67.7733Z" fill="#F3F7EF" />
    <path d="M62.3328 67.3097C62.0073 66.9131 61.5969 66.5961 61.1326 66.3825C60.6098 66.1596 60.0462 66.051 59.4788 66.0638C58.8914 66.0575 58.3094 66.1778 57.7716 66.4166C57.2339 66.6555 56.7529 67.0074 56.3607 67.4488C55.9589 67.9036 55.6488 68.4331 55.4477 69.0077C55.0038 70.2771 55.0038 71.6616 55.4477 72.931C55.6499 73.4972 55.9557 74.0201 56.3493 74.4724C56.7243 74.907 57.1861 75.2565 57.7045 75.4982C58.2279 75.7429 58.7986 75.8676 59.3755 75.8633C60.0051 75.8749 60.6274 75.7254 61.1843 75.4286C61.7092 75.1443 62.1554 74.7319 62.482 74.229L65.2498 76.3153C64.6388 77.194 63.7978 77.8842 62.8208 78.3088C61.8694 78.7338 60.8409 78.9548 59.8004 78.9578C58.6895 78.9621 57.5869 78.7659 56.5445 78.3783C55.5847 78.0308 54.7068 77.4862 53.9662 76.7789C53.2316 76.0664 52.6543 75.2054 52.2722 74.2522C51.4607 72.1223 51.4607 69.7642 52.2722 67.6343C52.6557 66.6818 53.2328 65.8211 53.9662 65.1076C54.7098 64.4042 55.5869 63.8601 56.5445 63.5082C57.5869 63.1206 58.6895 62.9243 59.8004 62.9287C60.2468 62.9316 60.6923 62.9703 61.1326 63.0446C61.5973 63.1252 62.0531 63.2514 62.4935 63.4212C62.9489 63.5966 63.3809 63.8283 63.7798 64.1109C64.2003 64.4034 64.5741 64.7591 64.8881 65.1655L62.3328 67.3097Z" fill="#F3F7EF" />
    <path d="M67.1907 63.3517H77.4292V66.4404H70.5097V69.28H77.0732V72.3746H70.5097V75.4692H77.8139V78.5637H67.1907V63.3517Z" fill="#F3F7EF" />
    <path d="M88.9999 91H-0.00585938V0.017334H88.9999V91ZM2.337 88.6413H86.6628V2.36433H2.337V88.6413Z" fill="#F3F7EF" />
    <path d="M72.5425 36.3294L66.2891 29.9838L60.0415 36.3294V1.18225H72.5425V36.3294Z" fill="#F3F7EF" />
  </g>
  <defs>
    <clipPath id="clip0_83_278">
      <rect width="89" height="91" fill="white" />
    </clipPath>
  </defs>
        </svg>
        <form className="info">
          <input type="text"  placeholder="Имя Фамилия" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Название организации" value={org} onChange={(e) => setOrg(e.target.value)}/>
          <input type="text" placeholder="Должность" value={post} onChange={(e) => setPost(e.target.value)}/>
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="tel" placeholder="Телефон" value={number} onChange={(e) => setNumber(e.target.value)}/>
        </form>
        <form className="checkbox">
            <label><input type="checkbox" className="checkBox-checkBox" name="checkbox" value="yes" /> </label>
            <p className="checkbox-text">Я согласен на обработку моих <br/> <a href="http://pravo.gov.ru/proxy/ips/?docbody&nd=102108261" rel="noreferrer" target="_blank">персональных данных</a></p>
        </form>
        <button onClick={handler} className="send"  >Отправить</button>
      </div>
    </div>
  </div>
}

// export const [setOpenModal, openModal] = [setOpenModal, openModal];