
    // eksekusi hasil inputan Nomor hp
    function input_konten() {
      let x = document.getElementById('nomor');
      let text = document.getElementById('alertUserId');

      if (x.value.length < 6) {
        text.innerHTML = "Nomor Hp Biasanya Terdiri Dari 11-13 Angka";
        x.style = "border-bottom: 1.5px solid red;";
        text.style = "color: red;";
      } else if (x.value.length > 10) {
        text.innerHTML = "Oke ✓ ";
        text.style = "color: green;";
        x.style = "border-bottom: 1.5px solid green;";
      }
    }
    // CEK NOMOR TELEPON
    function cekNomorTelponUser() {

      // operator
      let operatorPulsa = document.getElementById("operatorPulsa");

      // input user
      let b = document.getElementById("nomor").value;

      // img operator
      let imgOperator = document.getElementById("img_operator");


      // pulsa Indosat
      let pulsaIndosat = document.getElementById("pulsa_indosat");

      // pulsa Simpati
      let pulsaSimpati = document.getElementById("pulsa_simpati");

      // pulsa XL
      let pulsaXl = document.getElementById("pulsa_xl");

      // pulsa Axis
      let pulsaAxis = document.getElementById("pulsa_axis");


      // pulsa Tri
      let pulsaTri = document.getElementById("pulsa_tri");

      // pulsa Smartfren
      let pulsaSmartfren = document.getElementById("pulsa_smartfren");
      let e500 = document.getElementById("E500");
      // pulsa Byu
      let pulsaByu = document.getElementById("pulsa_byu");

      let x = b.replace(/[^0-9]/g).substring(0, 4);

      if (x == null || x == '2' || x < 5 || x == "") {
        operatorPulsa.innerHTML = "OPERATOR";
        pulsaIndosat.style.display = "none";
        pulsaSimpati.style.display = "none";
        pulsaXl.style.display = "none";
        pulsaAxis.style.display = "none";
        pulsaTri.style.display = "none";
        pulsaSmartfren.style.display = "none";
        pulsaByu.style.display = "none";
        e500.style.display = "block";
        // CEK  NOMOR
      } else if (x == 08) {
        operatorPulsa.innerHTML = "Mendeteksi Nomor..";
        imgOperator.src = "#";
        pulsaIndosat.style.display = "none";
        pulsaSimpati.style.display = "none";
        pulsaXl.style.display = "none";
        pulsaAxis.style.display = "none";
        pulsaTri.style.display = "none";
        pulsaSmartfren.style.display = "none";
        pulsaByu.style.display = "none";
        e500.style.display = "block";

        // NOMOR TRI
      } else if (x == 0895 || x == 0896 || x == 0897 || x == 0898 || x == 0899) {
        operatorPulsa.innerHTML = "Tri (3)";
        imgOperator.src = "https://reservebukaolshop.nos.jkt-1.neo.id/70913/742137058d.jpg";
        pulsaTri.style.display = "block";
        e500.style.display = "none";

        // NOMOR BYU
      } else if (x == 0851) {
        operatorPulsa.innerHTML = "BYU ";
        imgOperator.src = "https://kiosscriptcode.files.wordpress.com/2022/04/wp-1649919854015.png";
        pulsaByu.style.display = "block";
        e500.style.display = "none";

        // NOMOR AXIS
      } else if (x == 0838 || x == 0831 || x == 0832 || x == 0833) {
        operatorPulsa.innerHTML = "Axis";
        imgOperator.src = "https://reservebukaolshop.nos.jkt-1.neo.id/70913/810219098e.jpg";
        pulsaAxis.style.display = "block";
        e500.style.display = "none";

        // NOMOR INDOSAT
      } else if (x == 0814 || x == 0815 || x == 0816 || x == 0855 || x == 0856 || x == 0857 || x == 0858) {
        operatorPulsa.innerHTML = "Indosat";
        imgOperator.src = "https://reservebukaolshop.nos.jkt-1.neo.id/70913/859438076d.jpg";
        pulsaIndosat.style.display = "block";
        e500.style.display = "none";

        // NOMOR XL
      } else if (x == 0818 || x == 0817 || x == 0819 || x == 0859 || x == 0877 || x == 0878) {
        operatorPulsa.innerHTML = "XL-Axiata";
        imgOperator.src = "https://reservebukaolshop.nos.jkt-1.neo.id/70913/915306210e.jpg";
        pulsaXl.style.display = "block";
        e500.style.display = "none";
        // NOMOR SMARTFREN
      } else if (x == 0881 || x == 0882 || x == 0883 || x == 0884 || x == 0885 || x == 0886 || x == 0887 || x == 0888 || x == 0889) {
        operatorPulsa.innerHTML = "Smartfren";
        imgOperator.src = "https://reservebukaolshop.nos.jkt-1.neo.id/70913/560788348y.jpg";
        pulsaSmartfren.style.display = "block";
        e500.style.display = "none";

        //  NOMOR TELKOMSEL
      } else if (x == 0811 || x == 0812 || x == 0813 || x == 0821 || x == 0822 || x == 0852 || x == 0853 || x == 0823 || x == 0835) {
        operatorPulsa.innerHTML = "Telkomsel";
        imgOperator.src = "https://reservebukaolshop.nos.jkt-1.neo.id/70913/960556997o.jpg";
        pulsaSimpati.style.display = "block";
        e500.style.display = "none";
      }
    }
    // bersihkan konten alert saat diklik oleh user
    function clearData(e) {
      document.getElementById('alertWarning').style.display = "none";
    }

    let cetakNama = document.getElementById("beliPulsa");

    let cetakHarga = document.getElementById("HargaBarang");

    let url = document.getElementById("linkUrl");

    let nomorTujuan = document.getElementById("noTujuan");
    let nomorInputan = document.getElementById("nomor");

    let totalTagihan = document.getElementById("totalTagihan");

    let cetak_operator = document.getElementById("cetakOperator");

    function cetak_data() {
      nama = document.getElementById("nama_barang").innerHTML;
      harga = document.getElementById("harga_barang").innerHTML;
      url_barang = document.getElementById("url_barang").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data1() {
      nama = document.getElementById("nama_barang1").innerHTML;
      harga = document.getElementById("harga_barang1").innerHTML;
      url_barang = document.getElementById("url_barang1").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data2() {
      nama = document.getElementById("nama_barang2").innerHTML;
      harga = document.getElementById("harga_barang2").innerHTML;
      url_barang = document.getElementById("url_barang2").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data3() {
      nama = document.getElementById("nama_barang3").innerHTML;
      harga = document.getElementById("harga_barang3").innerHTML;
      url_barang = document.getElementById("url_barang3").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data4() {
      nama = document.getElementById("nama_barang4").innerHTML;
      harga = document.getElementById("harga_barang4").innerHTML;
      url_barang = document.getElementById("url_barang4").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data5() {
      nama = document.getElementById("nama_barang5").innerHTML;
      harga = document.getElementById("harga_barang5").innerHTML;
      url_barang = document.getElementById("url_barang5").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data6() {
      nama = document.getElementById("nama_barang6").innerHTML;
      harga = document.getElementById("harga_barang6").innerHTML;
      url_barang = document.getElementById("url_barang6").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data7() {
      nama = document.getElementById("nama_barang7").innerHTML;
      harga = document.getElementById("harga_barang7").innerHTML;
      url_barang = document.getElementById("url_barang7").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data8() {
      nama = document.getElementById("nama_barang8").innerHTML;
      harga = document.getElementById("harga_barang8").innerHTML;
      url_barang = document.getElementById("url_barang8").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data9() {
      nama = document.getElementById("nama_barang9").innerHTML;
      harga = document.getElementById("harga_barang9").innerHTML;
      url_barang = document.getElementById("url_barang9").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data10() {
      nama = document.getElementById("nama_barang10").innerHTML;
      harga = document.getElementById("harga_barang10").innerHTML;
      url_barang = document.getElementById("url_barang10").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data11() {
      nama = document.getElementById("nama_barang11").innerHTML;
      harga = document.getElementById("harga_barang11").innerHTML;
      url_barang = document.getElementById("url_barang11").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data12() {
      nama = document.getElementById("nama_barang12").innerHTML;
      harga = document.getElementById("harga_barang12").innerHTML;
      url_barang = document.getElementById("url_barang12").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data13() {
      nama = document.getElementById("nama_barang13").innerHTML;
      harga = document.getElementById("harga_barang13").innerHTML;
      url_barang = document.getElementById("url_barang13").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data14() {
      nama = document.getElementById("nama_barang14").innerHTML;
      harga = document.getElementById("harga_barang14").innerHTML;
      url_barang = document.getElementById("url_barang14").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data15() {
      nama = document.getElementById("nama_barang15").innerHTML;
      harga = document.getElementById("harga_barang15").innerHTML;
      url_barang = document.getElementById("url_barang15").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data16() {
      nama = document.getElementById("nama_barang16").innerHTML;
      harga = document.getElementById("harga_barang16").innerHTML;
      url_barang = document.getElementById("url_barang16").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data17() {
      nama = document.getElementById("nama_barang17").innerHTML;
      harga = document.getElementById("harga_barang17").innerHTML;
      url_barang = document.getElementById("url_barang17").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data18() {
      nama = document.getElementById("nama_barang18").innerHTML;
      harga = document.getElementById("harga_barang18").innerHTML;
      url_barang = document.getElementById("url_barang18").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data19() {
      nama = document.getElementById("nama_barang19").innerHTML;
      harga = document.getElementById("harga_barang19").innerHTML;
      url_barang = document.getElementById("url_barang19").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data20() {
      nama = document.getElementById("nama_barang20").innerHTML;
      harga = document.getElementById("harga_barang20").innerHTML;
      url_barang = document.getElementById("url_barang20").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data21() {
      nama = document.getElementById("nama_barang21").innerHTML;
      harga = document.getElementById("harga_barang21").innerHTML;
      url_barang = document.getElementById("url_barang21").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data22() {
      nama = document.getElementById("nama_barang22").innerHTML;
      harga = document.getElementById("harga_barang22").innerHTML;
      url_barang = document.getElementById("url_barang22").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data23() {
      nama = document.getElementById("nama_barang23").innerHTML;
      harga = document.getElementById("harga_barang23").innerHTML;
      url_barang = document.getElementById("url_barang23").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data24() {
      nama = document.getElementById("nama_barang24").innerHTML;
      harga = document.getElementById("harga_barang24").innerHTML;
      url_barang = document.getElementById("url_barang24").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data25() {
      nama = document.getElementById("nama_barang25").innerHTML;
      harga = document.getElementById("harga_barang25").innerHTML;
      url_barang = document.getElementById("url_barang25").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data26() {
      nama = document.getElementById("nama_barang26").innerHTML;
      harga = document.getElementById("harga_barang26").innerHTML;
      url_barang = document.getElementById("url_barang26").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data27() {
      nama = document.getElementById("nama_barang27").innerHTML;
      harga = document.getElementById("harga_barang27").innerHTML;
      url_barang = document.getElementById("url_barang27").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data28() {
      nama = document.getElementById("nama_barang28").innerHTML;
      harga = document.getElementById("harga_barang28").innerHTML;
      url_barang = document.getElementById("url_barang28").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data29() {
      nama = document.getElementById("nama_barang29").innerHTML;
      harga = document.getElementById("harga_barang29").innerHTML;
      url_barang = document.getElementById("url_barang29").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data30() {
      nama = document.getElementById("nama_barang30").innerHTML;
      harga = document.getElementById("harga_barang30").innerHTML;
      url_barang = document.getElementById("url_barang30").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data31() {
      nama = document.getElementById("nama_barang31").innerHTML;
      harga = document.getElementById("harga_barang31").innerHTML;
      url_barang = document.getElementById("url_barang31").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data32() {
      nama = document.getElementById("nama_barang32").innerHTML;
      harga = document.getElementById("harga_barang32").innerHTML;
      url_barang = document.getElementById("url_barang32").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data33() {
      nama = document.getElementById("nama_barang33").innerHTML;
      harga = document.getElementById("harga_barang33").innerHTML;
      url_barang = document.getElementById("url_barang33").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data34() {
      nama = document.getElementById("nama_barang34").innerHTML;
      harga = document.getElementById("harga_barang34").innerHTML;
      url_barang = document.getElementById("url_barang34").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data35() {
      nama = document.getElementById("nama_barang35").innerHTML;
      harga = document.getElementById("harga_barang35").innerHTML;
      url_barang = document.getElementById("url_barang35").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data36() {
      nama = document.getElementById("nama_barang36").innerHTML;
      harga = document.getElementById("harga_barang36").innerHTML;
      url_barang = document.getElementById("url_barang36").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data37() {
      nama = document.getElementById("nama_barang37").innerHTML;
      harga = document.getElementById("harga_barang37").innerHTML;
      url_barang = document.getElementById("url_barang37").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data38() {
      nama = document.getElementById("nama_barang38").innerHTML;
      harga = document.getElementById("harga_barang38").innerHTML;
      url_barang = document.getElementById("url_barang38").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data39() {
      nama = document.getElementById("nama_barang39").innerHTML;
      harga = document.getElementById("harga_barang39").innerHTML;
      url_barang = document.getElementById("url_barang39").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data40() {
      nama = document.getElementById("nama_barang40").innerHTML;
      harga = document.getElementById("harga_barang40").innerHTML;
      url_barang = document.getElementById("url_barang40").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data41() {
      nama = document.getElementById("nama_barang41").innerHTML;
      harga = document.getElementById("harga_barang41").innerHTML;
      url_barang = document.getElementById("url_barang41").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data42() {
      nama = document.getElementById("nama_barang42").innerHTML;
      harga = document.getElementById("harga_barang42").innerHTML;
      url_barang = document.getElementById("url_barang42").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data43() {
      nama = document.getElementById("nama_barang43").innerHTML;
      harga = document.getElementById("harga_barang43").innerHTML;
      url_barang = document.getElementById("url_barang43").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data44() {
      nama = document.getElementById("nama_barang44").innerHTML;
      harga = document.getElementById("harga_barang44").innerHTML;
      url_barang = document.getElementById("url_barang44").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data45() {
      nama = document.getElementById("nama_barang45").innerHTML;
      harga = document.getElementById("harga_barang45").innerHTML;
      url_barang = document.getElementById("url_barang45").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }


    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data46() {
      nama = document.getElementById("nama_barang46").innerHTML;
      harga = document.getElementById("harga_barang46").innerHTML;
      url_barang = document.getElementById("url_barang46").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data47() {
      nama = document.getElementById("nama_barang47").innerHTML;
      harga = document.getElementById("harga_barang47").innerHTML;
      url_barang = document.getElementById("url_barang47").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data48() {
      nama = document.getElementById("nama_barang48").innerHTML;
      harga = document.getElementById("harga_barang48").innerHTML;
      url_barang = document.getElementById("url_barang48").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data49() {
      nama = document.getElementById("nama_barang49").innerHTML;
      harga = document.getElementById("harga_barang49").innerHTML;
      url_barang = document.getElementById("url_barang49").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data50() {
      nama = document.getElementById("nama_barang50").innerHTML;
      harga = document.getElementById("harga_barang50").innerHTML;
      url_barang = document.getElementById("url_barang50").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data51() {
      nama = document.getElementById("nama_barang51").innerHTML;
      harga = document.getElementById("harga_barang51").innerHTML;
      url_barang = document.getElementById("url_barang51").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data52() {
      nama = document.getElementById("nama_barang52").innerHTML;
      harga = document.getElementById("harga_barang52").innerHTML;
      url_barang = document.getElementById("url_barang52").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data53() {
      nama = document.getElementById("nama_barang53").innerHTML;
      harga = document.getElementById("harga_barang53").innerHTML;
      url_barang = document.getElementById("url_barang53").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data54() {
      nama = document.getElementById("nama_barang54").innerHTML;
      harga = document.getElementById("harga_barang54").innerHTML;
      url_barang = document.getElementById("url_barang54").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data55() {
      nama = document.getElementById("nama_barang55").innerHTML;
      harga = document.getElementById("harga_barang55").innerHTML;
      url_barang = document.getElementById("url_barang55").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data56() {
      nama = document.getElementById("nama_barang56").innerHTML;
      harga = document.getElementById("harga_barang56").innerHTML;
      url_barang = document.getElementById("url_barang56").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data57() {
      nama = document.getElementById("nama_barang57").innerHTML;
      harga = document.getElementById("harga_barang57").innerHTML;
      url_barang = document.getElementById("url_barang57").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data58() {
      nama = document.getElementById("nama_barang58").innerHTML;
      harga = document.getElementById("harga_barang58").innerHTML;
      url_barang = document.getElementById("url_barang58").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data59() {
      nama = document.getElementById("nama_barang59").innerHTML;
      harga = document.getElementById("harga_barang59").innerHTML;
      url_barang = document.getElementById("url_barang59").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data60() {
      nama = document.getElementById("nama_barang60").innerHTML;
      harga = document.getElementById("harga_barang60").innerHTML;
      url_barang = document.getElementById("url_barang60").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data61() {
      nama = document.getElementById("nama_barang61").innerHTML;
      harga = document.getElementById("harga_barang61").innerHTML;
      url_barang = document.getElementById("url_barang61").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data62() {
      nama = document.getElementById("nama_barang62").innerHTML;
      harga = document.getElementById("harga_barang62").innerHTML;
      url_barang = document.getElementById("url_barang62").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data63() {
      nama = document.getElementById("nama_barang63").innerHTML;
      harga = document.getElementById("harga_barang63").innerHTML;
      url_barang = document.getElementById("url_barang63").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data64() {
      nama = document.getElementById("nama_barang64").innerHTML;
      harga = document.getElementById("harga_barang64").innerHTML;
      url_barang = document.getElementById("url_barang64").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data65() {
      nama = document.getElementById("nama_barang65").innerHTML;
      harga = document.getElementById("harga_barang65").innerHTML;
      url_barang = document.getElementById("url_barang65").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data66() {
      nama = document.getElementById("nama_barang66").innerHTML;
      harga = document.getElementById("harga_barang66").innerHTML;
      url_barang = document.getElementById("url_barang66").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data67() {
      nama = document.getElementById("nama_barang67").innerHTML;
      harga = document.getElementById("harga_barang67").innerHTML;
      url_barang = document.getElementById("url_barang67").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data68() {
      nama = document.getElementById("nama_barang68").innerHTML;
      harga = document.getElementById("harga_barang68").innerHTML;
      url_barang = document.getElementById("url_barang68").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data69() {
      nama = document.getElementById("nama_barang69").innerHTML;
      harga = document.getElementById("harga_barang69").innerHTML;
      url_barang = document.getElementById("url_barang69").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data70() {
      nama = document.getElementById("nama_barang70").innerHTML;
      harga = document.getElementById("harga_barang70").innerHTML;
      url_barang = document.getElementById("url_barang70").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data71() {
      nama = document.getElementById("nama_barang71").innerHTML;
      harga = document.getElementById("harga_barang71").innerHTML;
      url_barang = document.getElementById("url_barang71").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data72() {
      nama = document.getElementById("nama_barang72").innerHTML;
      harga = document.getElementById("harga_barang72").innerHTML;
      url_barang = document.getElementById("url_barang72").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data73() {
      nama = document.getElementById("nama_barang73").innerHTML;
      harga = document.getElementById("harga_barang73").innerHTML;
      url_barang = document.getElementById("url_barang73").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data74() {
      nama = document.getElementById("nama_barang74").innerHTML;
      harga = document.getElementById("harga_barang74").innerHTML;
      url_barang = document.getElementById("url_barang74").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data75() {
      nama = document.getElementById("nama_barang75").innerHTML;
      harga = document.getElementById("harga_barang75").innerHTML;
      url_barang = document.getElementById("url_barang75").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data76() {
      nama = document.getElementById("nama_barang76").innerHTML;
      harga = document.getElementById("harga_barang76").innerHTML;
      url_barang = document.getElementById("url_barang76").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data77() {
      nama = document.getElementById("nama_barang77").innerHTML;
      harga = document.getElementById("harga_barang77").innerHTML;
      url_barang = document.getElementById("url_barang77").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data78() {
      nama = document.getElementById("nama_barang78").innerHTML;
      harga = document.getElementById("harga_barang78").innerHTML;
      url_barang = document.getElementById("url_barang78").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data79() {
      nama = document.getElementById("nama_barang79").innerHTML;
      harga = document.getElementById("harga_barang79").innerHTML;
      url_barang = document.getElementById("url_barang79").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data80() {
      nama = document.getElementById("nama_barang80").innerHTML;
      harga = document.getElementById("harga_barang80").innerHTML;
      url_barang = document.getElementById("url_barang80").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data81() {
      nama = document.getElementById("nama_barang81").innerHTML;
      harga = document.getElementById("harga_barang81").innerHTML;
      url_barang = document.getElementById("url_barang81").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data82() {
      nama = document.getElementById("nama_barang82").innerHTML;
      harga = document.getElementById("harga_barang82").innerHTML;
      url_barang = document.getElementById("url_barang82").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data83() {
      nama = document.getElementById("nama_barang83").innerHTML;
      harga = document.getElementById("harga_barang83").innerHTML;
      url_barang = document.getElementById("url_barang83").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data84() {
      nama = document.getElementById("nama_barang84").innerHTML;
      harga = document.getElementById("harga_barang84").innerHTML;
      url_barang = document.getElementById("url_barang84").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data85() {
      nama = document.getElementById("nama_barang85").innerHTML;
      harga = document.getElementById("harga_barang85").innerHTML;
      url_barang = document.getElementById("url_barang85").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data86() {
      nama = document.getElementById("nama_barang86").innerHTML;
      harga = document.getElementById("harga_barang86").innerHTML;
      url_barang = document.getElementById("url_barang86").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data87() {
      nama = document.getElementById("nama_barang87").innerHTML;
      harga = document.getElementById("harga_barang87").innerHTML;
      url_barang = document.getElementById("url_barang87").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data88() {
      nama = document.getElementById("nama_barang88").innerHTML;
      harga = document.getElementById("harga_barang88").innerHTML;
      url_barang = document.getElementById("url_barang88").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }

    // cara ini hanya untuk natif atau untuk bukaolshop
    function cetak_data89() {
      nama = document.getElementById("nama_barang89").innerHTML;
      harga = document.getElementById("harga_barang89").innerHTML;
      url_barang = document.getElementById("url_barang89").href;
      let nomorInputan = document.getElementById("nomor").value.replace(/\s+/g, '');
      let operator = document.getElementById("operatorPulsa").innerHTML;

      // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
      if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
        nomorTujuan.innerHTML = none;
      }
      cetakNama.innerHTML = nama;
      cetakHarga.innerHTML = harga;
      totalTagihan.innerHTML = harga;
      url = url_barang;
      nomorTujuan.innerHTML = nomorInputan;
      cetakOperator.innerHTML = operator;
    }


    // ############# BATAS KALAU KAMU PAKAI HOSTING GK PERLU LAKUKAN CARA DI ATAS INI, CUKUP BIKIN CLASS UNTUK QUERY DATABASE KAMU #############

    // SEBELUM KIRIM DATA NOMOR TUJUAN PERIKSA DAN HILANGKAN SEMUA SIMBOL SIMBOL DAN HURUF, CETAK HANYA ANGKA SAJA DAN BERIKAN SPASI DI INPUTAN
    // hasil inputan tidak boleh lebih dari 13 karakter
    document.getElementById('nomor').addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(.{14})/g, '$1 ').substring(0, 16).trim();
    });

    // loading
    var loading = document.getElementById("spinner_load");
    // url tujuan
    var countuu = 0.5; // dalam detik
    function countDown() {
      if (countuu > 0) {
        countuu--;
        setTimeout("countDown()", 1000);
      } else {
        loading.style.display = "none";
      }
    }
    countDown();


    //buat fungsi untuk kirim produk yg dipilih user ke bukaolshop
    function kirimData() {

      // ambil url inputan user 
      const link = url;
      // masukkan catatan parameter dari bukaolshop
      const catatan = "?catatan=";
      // ambil nomor dari hasil inputan user dan hilangkan semua karakter selain ANGKA
      const nomor = document.getElementById('noTujuan').innerHTML;
      // sebelum mengirimkan data 
      //periksa dulu apakah nomor tujuan sudah di isi
      //periksa juga produk user dan periksa harga produk
      if (nomor == null || nomor == "0858" || nomor.length < 10 || nomor == "" || nomor == "0" || nomor == "none") {
        // jika nomor kosong jangan kirimkan data nomor harus lebih dari 10 karakter dan beri peringatan ke user
        swal({ title: "Nomor tidak Lengkap", text: "Periksa Kembali Nomor Tujuan", icon: "error", button: true });
      } else {
        // jika nomor ada isinya dan isinya lebih dari 10 karakter kirimkan data ke bukaolshop
        window.location.href = link + catatan + nomor;
      }
    }
