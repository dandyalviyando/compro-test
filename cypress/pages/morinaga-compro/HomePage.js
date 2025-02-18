class HomePage {
    constructor() {
      // Load locators from the locators.json
      this.locators = require('../../fixtures//locators/morp-locators.json');
    }
  
    // Navigate to the homepage
    visit() {
      cy.visit('/');
    }
  
    // Header Section
    getTentangKami() {
      return cy.get(this.locators.header.tentang_kami);
    }
  
    getProduk() {
      return cy.get(this.locators.header.produk);
    }
  
    getProduk13Tahun() {
      return cy.get(this.locators.header.produk_1_3_tahun);
    }
  
    getProduk312Tahun() {
      return cy.get(this.locators.header.produk_3_12_tahun);
    }
  
    getHealthTools() {
      return cy.get(this.locators.header.health_tools);
    }
  
    getCekAlergi() {
      return cy.get(this.locators.header.cek_alergi);
    }
  
    getIdeBermain() {
      return cy.get(this.locators.header.ide_bermain);
    }
  
    getCekTumbuhKembang() {
      return cy.get(this.locators.header.cek_tumbuh_kembang);
    }
  
    getArtikel() {
      return cy.get(this.locators.header.artikel);
    }
  
    getResep() {
      return cy.get(this.locators.header.resep);
    }
  
    getMorinagaRewardsClub() {
      return cy.get(this.locators.header.morinaga_rewards_club);
    }
  
    getBeritaPromo() {
      return cy.get(this.locators.header.berita_promo);
    }
  
    getSearchBar() {
      return cy.get(this.locators.header.searchbar);
    }
  
    getBahasa() {
      return cy.get(this.locators.header.bahasa);
    }
  
    getLogoMorinaga() {
      return cy.get(this.locators.header.logo_morinaga);
    }
  
    // Slider Section
    getSliderImages() {
      return cy.get(this.locators.home_slider.slider_images);
    }
  
    getPrevButton() {
      return cy.get(this.locators.home_slider.prev_button);
    }
  
    getNextButton() {
      return cy.get(this.locators.home_slider.next_button);
    }
  
    getPaginationButtons() {
      return cy.get(this.locators.home_slider.pagination_buttons);
    }
  
    getActiveSlideStatus() {
      return cy.get(this.locators.home_slider.active_slide_status);
    }
  
    // Pilar Section
    getPilarSection() {
      return cy.get(this.locators.home_pilar.pilar_section);
    }
  
    getPilarTitle() {
      return cy.get(this.locators.home_pilar.pilar_title);
    }
  
    getPilarLogo() {
      return cy.get(this.locators.home_pilar.pilar_logo);
    }
  
    getPilarTitleText() {
      return cy.get(this.locators.home_pilar.pilar_title_text);
    }
  
    getPilarDiscoverButton() {
      return cy.get(this.locators.home_pilar.pilar_discover_button);
    }
  
    getCardPotensi() {
      return cy.get(this.locators.home_pilar.card_potensi);
    }
  
    getCardAtensi() {
      return cy.get(this.locators.home_pilar.card_atensi);
    }
  
    getCardNutrisi() {
      return cy.get(this.locators.home_pilar.card_nutrisi);
    }

    getCardPotensiImage() {
      return cy.get(this.locators.home_pilar.card_potensi_image);
    }

    getCardAtensiImage() {
      return cy.get(this.locators.home_pilar.card_atensi_image);
    }

    getCardNutrisiImage() {
      return cy.get(this.locators.home_pilar.card_nutrisi_image);
    }

    getCardPotensiButton() {
      return cy.get(this.locators.home_pilar.card_potensi_button);
    }
    
    getCardAtensiButton() {
      return cy.get(this.locators.home_pilar.card_atensi_button);
    }
    
    getCardNutrisiButton() {
      return cy.get(this.locators.home_pilar.card_nutrisi_button);
    }

  // Home Morinaga Rewards Club Section
    getHomeRewardsClubSection() {
      return cy.get(this.locators.home_rewards_club.section);
    }

    getRewardsClubTitle() {
      return cy.get(this.locators.home_rewards_club.title);
    }

    getRewardsClubJoinButton() {
      return cy.get(this.locators.home_rewards_club.button_join);
    }

    // Home Video Section
    getHomeVideoSection() {
      return cy.get(this.locators.home_video.section);
    }

    getHomeVideoWrapper() {
      return cy.get(this.locators.home_video.wrapper);
    }

    getYoutubeBackgroundImage() {
      return cy.get(this.locators.home_video.youtube_background_image);
    }
    
    // Home Kelebihan Morinaga Section
    getHomeKelebihanMorinagaSection() {
      return cy.get(this.locators.home_kelebihan_morinaga.section);
    }
  
    getTitleTumbuhKembang() {
      return cy.get(this.locators.home_kelebihan_morinaga.title_tumbuh_kembang);
    }
  
    getContentTumbuhKembang() {
      return cy.get(this.locators.home_kelebihan_morinaga.content_tumbuh_kembang);
    }
  
    getTitleKecerdasanMultitalenta() {
      return cy.get(this.locators.home_kelebihan_morinaga.title_kecerdasan_multitalenta);
    }
  
    getContentKecerdasanMultitalenta() {
      return cy.get(this.locators.home_kelebihan_morinaga.content_kecerdasan_multitalenta);
    }
  
    getTitleSahabatUsiaEmas() {
      return cy.get(this.locators.home_kelebihan_morinaga.title_sahabat_usia_emas);
    }
  
    getContentSahabatUsiaEmas() {
      return cy.get(this.locators.home_kelebihan_morinaga.content_sahabat_usia_emas);
    }


    
  
    // Footer Section
    getFooterLogo() {
      return cy.get(this.locators.footer.footer_logo);
    }
  
    getSocialYoutube() {
      return cy.get(this.locators.footer.social_youtube);
    }
  
    getSocialTwitter() {
      return cy.get(this.locators.footer.social_twitter);
    }
  
    getSocialFacebook() {
      return cy.get(this.locators.footer.social_facebook);
    }
  
    getSocialInstagram() {
      return cy.get(this.locators.footer.social_instagram);
    }
  
    getFooterGroup() {
      return cy.get(this.locators.footer.footer_group);
    }
  
    getKalbeNutritionals() {
      return cy.get(this.locators.footer.kalbe_nutritionals);
    }
  
    getMorinagaSoya() {
      return cy.get(this.locators.footer.morinaga_soya);
    }
  
    getNutriveBenecol() {
      return cy.get(this.locators.footer.nutrive_benecol);
    }
  
    getDiva() {
      return cy.get(this.locators.footer.diva);
    }
  
    getEntrasol() {
      return cy.get(this.locators.footer.entrasol);
    }
  
    getPrenagen() {
      return cy.get(this.locators.footer.prenagen);
    }
  
    getMilna() {
      return cy.get(this.locators.footer.milna);
    }
  
    getZee() {
      return cy.get(this.locators.footer.zee);
    }
  
    getDiabetasol() {
      return cy.get(this.locators.footer.diabetasol);
    }
  
    getSlimAndFit() {
      return cy.get(this.locators.footer.slim_and_fit);
    }
  
    getTentangMorinaga() {
      return cy.get(this.locators.footer.tentang_morinaga);
    }
  
    getProdukFooter() {
      return cy.get(this.locators.footer.produk);
    }
  
    getBeritaPromoFooter() {
      return cy.get(this.locators.footer.berita_promo_footer);
    }
  
    getArtikelFooter() {
      return cy.get(this.locators.footer.artikel_footer);
    }
  
    getMorinagaRewardsClubFooter() {
      return cy.get(this.locators.footer.morinaga_rewards_club_footer);
    }
  
    getSampelGratis() {
      return cy.get(this.locators.footer.sampel_gratis);
    }
  
    getFaq() {
      return cy.get(this.locators.footer.faq);
    }
  
    getHubungiKami() {
      return cy.get(this.locators.footer.hubungi_kami);
    }
  
    getSyaratKetentuan() {
      return cy.get(this.locators.footer.syarat_ketentuan);
    }
  
    getKebijakanPrivasi() {
      return cy.get(this.locators.footer.kebijakan_privasi);
    }
  
    getBantuan() {
      return cy.get(this.locators.footer.bantuan);
    }
  
    getAlamat() {
      return cy.get(this.locators.footer.alamat);
    }
  
    getNomorWA() {
      return cy.get(this.locators.footer.nomor_wa);
    }
  
    getNomorTelepon() {
      return cy.get(this.locators.footer.nomor_telepon);
    }
  
    getEmailAddress() {
      return cy.get(this.locators.footer.email_address);
    }
  }
  
  module.exports = new HomePage();  