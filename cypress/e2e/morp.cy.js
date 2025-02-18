const HomeMorinaga = require('../pages/morinaga-compro/HomePage');

describe('Morinaga Homepage Tests', () => {
  beforeEach(() => {
    HomeMorinaga.visit(); // Visit the homepage before each test
  });

  it('should have the correct header elements', () => {
    HomeMorinaga.getLogoMorinaga().should('be.visible');
    HomeMorinaga.getTentangKami().should('have.attr', 'href').and('include', '/tentang-kami');
    HomeMorinaga.getProduk().should('have.attr', 'href').and('include', '/produk');
    HomeMorinaga.getProduk13Tahun().should('have.attr', 'href').and('include', '/produk/1-3-tahun');
    HomeMorinaga.getProduk312Tahun().should('have.attr', 'href').and('include', '/produk/3-12-tahun');
    HomeMorinaga.getHealthTools().should('be.visible');
    HomeMorinaga.getCekAlergi().should('have.attr', 'href').and('include', '/tes-alergi');
    HomeMorinaga.getIdeBermain().should('have.attr', 'href').and('include', '/mipp');
    HomeMorinaga.getCekTumbuhKembang().should('have.attr', 'href').and('include', '/parenthings');
    HomeMorinaga.getArtikel().should('have.attr', 'href').and('include', '/milestone');
    HomeMorinaga.getResep().should('have.attr', 'href').and('include', '/resep');
    // HomeMorinaga.getMorinagaRewardsClub().should('be.visible', { timeout: 10000 }).and('have.attr', 'href').and('include', '/klub/masuk');
    HomeMorinaga.getBeritaPromo().should('have.attr', 'href').and('include', '/artikel');
    // HomeMorinaga.getSearchBar().should('be.visible');
    HomeMorinaga.getBahasa().should('be.visible');
  });

  it('should display slider images with valid src', () => {
    // Cek apakah ada gambar di slider
    HomeMorinaga.getSliderImages().should('have.length.greaterThan', 0);
  
    // Periksa src setiap gambar, pastikan include 'https://assets.morinaga.id/images'
    HomeMorinaga.getSliderImages().each(($img) => {
      cy.wrap($img)
        .should('have.attr', 'src')
        .and('include', 'https://assets.morinaga.id/images');
    });
  
    // Cek navigasi slider
    HomeMorinaga.getNextButton().click();
    HomeMorinaga.getPrevButton().click();
    HomeMorinaga.getPaginationButtons().first().click();
  });
  

  it('should have pilar cards visible and images with valid src', () => {
    // Scroll ke kartu pertama dan pastikan visibilitas
    HomeMorinaga.getCardPotensi().scrollIntoView().should('be.visible');
    cy.wait(5000); // Tunggu agar elemen terlihat setelah scroll
    
    // Periksa gambar pada kartu pertama
    HomeMorinaga.getCardPotensi().find('img')
      .should('be.visible', { timeout: 10000 })
      .and('have.attr', 'src')
      .and('include', 'https://assets.morinaga.id/images');
    
    // Scroll ke kartu kedua dan pastikan visibilitas
    HomeMorinaga.getCardAtensi().should('be.visible');
    cy.wait(1000); // Tunggu agar elemen terlihat setelah scroll
    
    // Periksa gambar pada kartu kedua
    HomeMorinaga.getCardAtensi().find('img')
      .should('be.visible', { timeout: 10000 })
      .and('have.attr', 'src')
      .and('include', 'https://assets.morinaga.id/images');
  
    // Scroll ke kartu ketiga dan pastikan visibilitas
    HomeMorinaga.getCardNutrisi().should('be.visible');
    cy.wait(1000); // Tunggu agar elemen terlihat setelah scroll
    
    // Periksa gambar pada kartu ketiga
    HomeMorinaga.getCardNutrisi().find('img')
      .should('be.visible', { timeout: 10000 })
      .and('have.attr', 'src')
      .and('include', 'https://assets.morinaga.id/images');
  });
  

  it('should verify navigation on pilar card buttons', () => {
    HomeMorinaga.getCardPotensiButton().click();
    cy.url().should('include', 'https://morinaga.id/en/login?r=parenthings?to=ide-bermain');
    cy.go('back');
    
    HomeMorinaga.getCardAtensiButton().click();
    cy.url().should('include', 'https://morinaga.id/id/parenthings');
    cy.go('back');

    HomeMorinaga.getCardNutrisiButton().click();
    cy.url().should('include', 'https://morinaga.id/id/produk');
    cy.go('back');
  
  });


  it('should display Home Morinaga Rewards Club section with correct button link', () => {
    // Pastikan section Rewards Club ada
    HomeMorinaga.getHomeRewardsClubSection().should('exist');
  
    // Pastikan judul dan deskripsi section terlihat
    HomeMorinaga.getRewardsClubTitle().should('exist').and('contain.text', 'Morinaga Rewards Club');
  
    // Pastikan tombol join terlihat dan memiliki link yang benar
    HomeMorinaga.getRewardsClubJoinButton()
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href', 'https://morinaga.id/id/klub');
    
  });
  

  it('should display Home Video section with correct YouTube video and background image', () => {

    HomeMorinaga.getHomeVideoSection().scrollIntoView().should('be.visible');
    cy.wait(5000);
  
    HomeMorinaga.getHomeVideoWrapper().should('exist').and('be.visible');
  
    HomeMorinaga.getYoutubeBackgroundImage().should('have.css', 'background-image').and('include', 'https://img.youtube.com');
  
  });
  


  it('should expand and display content in Home Kelebihan Morinaga section before footer', () => {
    // Pastikan section Home Kelebihan Morinaga ada
    HomeMorinaga.getHomeKelebihanMorinagaSection().should('exist');
  
    // Verifikasi "Tumbuh Kembang" accordion
    HomeMorinaga.getTitleTumbuhKembang().should('exist').click();
    HomeMorinaga.getContentTumbuhKembang().should('be.visible').and('not.be.empty');
  
    // Verifikasi "Kecerdasan Multitalenta" accordion
    HomeMorinaga.getTitleKecerdasanMultitalenta().should('exist').click();
    HomeMorinaga.getContentKecerdasanMultitalenta().should('be.visible').and('not.be.empty');
  
    // Verifikasi "Sahabat Usia Emas" accordion
    HomeMorinaga.getTitleSahabatUsiaEmas().should('exist').click();
    HomeMorinaga.getContentSahabatUsiaEmas().should('be.visible').and('not.be.empty');
  });
    

  it('should display footer links', () => {
    cy.scrollTo('bottom'); // Scroll ke bawah halaman untuk memuat gambar
  
    // Tunggu hingga gambar dimuat
    cy.get('img.b-lazy', { timeout: 10000 }).should('have.attr', 'src').and('not.be.empty');
    
    // Periksa footer links dengan pemeriksaan URL lengkap menggunakan 'include'
    HomeMorinaga.getKalbeNutritionals().should('have.attr', 'href').and('include', 'https://www.kalbenutritionals.com');
    HomeMorinaga.getMorinagaSoya().should('have.attr', 'href').and('include', 'https://morinagasoya.com/id');
    HomeMorinaga.getNutriveBenecol().should('have.attr', 'href').and('include', 'https://nutrivenutrition.com');
    HomeMorinaga.getEntrasol().should('have.attr', 'href').and('include', 'https://entrasol.com');
    HomeMorinaga.getPrenagen().should('have.attr', 'href').and('include', 'https://www.prenagen.com');
    HomeMorinaga.getZee().should('have.attr', 'href').and('include', 'https://susuzee.id');
    HomeMorinaga.getDiabetasol().should('have.attr', 'href').and('include', 'https://www.facebook.com/Diabetasol');
    HomeMorinaga.getSlimAndFit().should('have.attr', 'href').and('include', 'https://slimandfit.co.id');
    HomeMorinaga.getTentangMorinaga().should('have.attr', 'href').and('include', 'https://morinaga.id/id/tentang-kami');
    HomeMorinaga.getProdukFooter().should('have.attr', 'href').and('include', 'https://morinaga.id/id/produk');
    HomeMorinaga.getBeritaPromoFooter().should('have.attr', 'href').and('include', 'https://morinaga.id/id/artikel');
    HomeMorinaga.getArtikelFooter().should('have.attr', 'href').and('include', 'https://morinaga.id/id/milestone');
    HomeMorinaga.getMorinagaRewardsClubFooter().should('have.attr', 'href').and('include', 'https://morinaga.id/id/klub');
    HomeMorinaga.getSampelGratis().should('have.attr', 'href').and('include', 'https://morinaga.id/id/request-sampling');
    HomeMorinaga.getFaq().should('have.attr', 'href').and('include', 'https://morinaga.id/id/faq');
    HomeMorinaga.getHubungiKami().should('have.attr', 'href').and('include', 'https://morinaga.id/id/hubungi-kami');
    HomeMorinaga.getSyaratKetentuan().should('have.attr', 'href').and('include', 'https://morinaga.id/id/syarat-dan-ketentuan');
    HomeMorinaga.getKebijakanPrivasi().should('have.attr', 'href').and('include', 'https://morinaga.id/id/kebijakan-privasi');
    HomeMorinaga.getAlamat().should('be.visible');
    HomeMorinaga.getNomorWA().should('have.attr', 'href').and('include', 'https://wa.me/+62817588830');
    HomeMorinaga.getNomorTelepon().should('have.attr', 'href').and('include', 'tel:+628001402000');
    HomeMorinaga.getEmailAddress().should('have.attr', 'href').and('include', 'mailto:customer@kalbenutritionals.com');
  });
  
});
