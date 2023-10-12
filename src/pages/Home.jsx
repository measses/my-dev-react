import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold my-4">Merhaba, Yazılım Dünyasına Hoş Geldiniz!</h1>
        <p className="text-lg my-4">Benim adım [Adınız] ve bu siteyi yeni başlayanlar için yazılım dünyasını keşfetmelerine yardımcı olmak için oluşturdum.</p>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold">Eğlenceli Bilgiler</h2>
        <p>
          Bilgisayarlar düşünebilir mi? Bilgisayarlar, aslında çok hızlı hesaplamalar yapabilen araçlardır, ancak insanlar gibi düşünemezler.
        </p>
        <p>
          İnternet ne kadar büyük? İnternet, milyarlarca web sitesini ve trilyonlarca sayfayı barındırır. Bu, muazzam miktarda veriyi ve bilgiyi içerir.
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold">En İyi Blog Gönderileri</h2>
        {/* Blog gönderileri burada listelenebilir */}
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold">Eğitici Videolar</h2>
        {/* Eğitici videolar burada gösterilebilir */}
      </div>
    </div>
  );
};

export default Home;
