import Image from "next/image";

export default function Home() {
  return (
      <div>
        <div className="container">
          <nav className="title">ポートフォリオ
            <div>
              <form action="#">
                <label className="switch">
                  <span className="slider"></span>
                </label>
              </form>
            </div>
          </nav>
          <section> 
            <div className="content">
              <h1>My PortFolio</h1>
              <h3>私の名前は~~です。</h3>
              <div className="profile">
                <div className="profile-text">
                  <p>名前：山田太郎</p>
                  <p>生年月日:1990年1月1日</p>
                  <p>出身地：東京都</p>
                  <p>趣味：読書、映画鑑賞</p>
                </div>
              </div>
              <button className="primary-btn">詳細</button> 
            </div>
          </section>
        </div>
      </div>
  );
}
