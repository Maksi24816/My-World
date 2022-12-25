//Вкл. Блок

$(document).ready(function() {
	$('.TelefonID').click(function(event) {
		$('.SMSMenu,.TelefonIDFoto').addClass('Act');
	});
});
$(document).ready(function() {
	$('.Dok').click(function(event) {
		$('.DokInfo').addClass('Act');
	});
});

//Вкл. Закон для Бокса

$(document).ready(function() {
	$('.TelefonID').click(function(event) {
		$('.Box,.HeaderGran').addClass('Hidden1');
	});
});
$(document).ready(function() {
	$('.Dok').click(function(event) {
		$('.Box').addClass('Fixed1');
	});
});

//Викл. Блок

$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.SMSMenuBlock').click(function(event) {
		$('.SMSMenu,.TelefonIDFoto').removeClass('Act');
	});
});
$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.DokInfoBlock').click(function(event) {
		$('.DokInfo').removeClass('Act');
	});
});


//Викл. Закон для Бокса

$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.SMSMenuBlock').click(function(event) {
		$('.Box,.HeaderGran').removeClass('Hidden1');
	});
});
$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox,.DokInfoBlock').click(function(event) {
		$('.Box').removeClass('Fixed1');
	});
});


$(document).ready(function() {
	$('.SMSMenuFonNowPoXrestBox').hover(function(event) {
		$('.SMSMenuFonNowPoXrest1,.SMSMenuFonNowPoXrest2').toggleClass('Color');
	});
});





$(document).ready(function() {
	$('.Pp').click(function(event) {
		$('.PpBox').addClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.I19A,.Nine1,.HeaderOsnBro,.VKA,.HeaderGranVukl').click(function(event) {
		$('.PpBox').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.Nine1').click(function(event) {
		$('.Nine1Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.I19A,.Pp,.HeaderOsnBro,.VKA,.HeaderGranVukl').click(function(event) {
		$('.Nine1Box').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.HeaderOsnBro').click(function(event) {
		$('.HeaderOsnBroBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.I19A,.Pp,.Nine1,.VKA,.HeaderGranVukl').click(function(event) {
		$('.HeaderOsnBroBox').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.I19A').click(function(event) {
		$('.I19Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I20A,.Pp,.Nine1,.VKA,.HeaderGranVukl,.HeaderOsnBro').click(function(event) {
		$('.I19Box').removeClass('Act');
	});
});


$(document).ready(function() {
	$('.I20A').click(function(event) {
		$('.I20Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Box,.I19A,.Pp,.Nine1,.VKA,.HeaderGranVukl,.HeaderOsnBro').click(function(event) {
		$('.I20Box').removeClass('Act');
	});
});



$(document).ready(function() {
	$('.Bil2').hover(function(event) {
		$('.Bil2Box').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.Bil2Box').hover(function(event) {
		$('.Bil2Box').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.SMSID').hover(function(event) {
		$('.TelefonIDBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.TelefonIDBox').hover(function(event) {
		$('.TelefonIDBox').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.YouPidp').hover(function(event) {
		$('.YouPidpBox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.YouPidpBox').hover(function(event) {
		$('.YouPidpBox').addClass('Act');
	});
});
$(document).ready(function() {
	$('.Face').hover(function(event) {
		$('.YouPidpBox').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.CnopkaM').click(function(event) {
		$('.CnopkaF,.CnopkaM,.CnopkaFText,.CnopkaMText,.FKMS,.HeartF,.HeartM').addClass('Act');
	});
});
$(document).ready(function() {
	$('.CnopkaM').click(function(event) {
		$('.FotoFoto11,.FotoFoto22,.FotoFoto12,.FotoFoto21').addClass('Act');
	});
});
$(document).ready(function() {
	$('.CnopkaF').click(function(event) {
		$('.CnopkaF,.CnopkaM,.CnopkaFText,.CnopkaMText,.FKMS,.HeartF,.HeartM').removeClass('Act');
	});
});
$(document).ready(function() {
	$('.CnopkaF').click(function(event) {
		$('.FotoFoto11,.FotoFoto22,.FotoFoto12,.FotoFoto21').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.I19').hover(function(event) {
		$('.I19,.I19A').addClass('Act');
	});
});
$(document).ready(function() {
	$('.HeaderGranVukl').hover(function(event) {
		$('.I19,.I19A').removeClass('Act');
	});
});
$(document).ready(function() {
	$('.I20').hover(function(event) {
		$('.I20,.I20A').addClass('Act');
	});
});
$(document).ready(function() {
	$('.HeaderGranVukl').hover(function(event) {
		$('.I20,.I20A').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.DDD').click(function(event) {
		$('.DDD,.YouPidp').addClass('Act');
	});
});

$(document).ready(function() {
	$('.YouPidpBox').click(function(event) {
		$('.DDD,.YouPidp,.YouPidpBox').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.HeartMMusic1').hover(function(event) {
		$('.HeartMMusicFoto1,.HeartMMusicFoto2').toggleClass('Act');
	});
});


$(document).ready(function() {
	$('.NowsSMidMusic').hover(function(event) {
		$('.TextMid1,.FotoMid1').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID2').hover(function(event) {
		$('.TextMid2,.FotoMid2').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID3').hover(function(event) {
		$('.TextMid3,.FotoMid3').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID4').hover(function(event) {
		$('.TextMid4,.FotoMid4').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID5').hover(function(event) {
		$('.TextMid5,.FotoMid5').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID6').hover(function(event) {
		$('.TextMid6,.FotoMid6').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID7').hover(function(event) {
		$('.TextMid7,.FotoMid7').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID8').hover(function(event) {
		$('.TextMid8,.FotoMid8').toggleClass('Opasity1');
	});
});
$(document).ready(function() {
	$('.NowsSMidMusicID9').hover(function(event) {
		$('.TextMid9,.FotoMid9').toggleClass('Opasity1');
	});
});

$(document).ready(function() {
	$('.MyZAp').click(function(event) {
		$('.MyZAp,.ALLZap,.ZapLin').addClass('Act');
	});
});
$(document).ready(function() {
	$('.ALLZap').click(function(event) {
		$('.MyZAp,.ALLZap,.ZapLin').removeClass('Act');
	});
});

$(document).ready(function() {
	$('.NowsSMidBotton').click(function(event) {
		$('.You,.Pravo,.NowsSMid,.NowsS,.NowsSMidBotton,.NowsSMidMusic').addClass('Act');
		$('.NowsSMidMusicID2,.NowsSMidMusicID3,.NowsSMidMusicID4,.NowsSMidMusicID5,.NowsSMidMusicID6,.NowsSMidMusicID7,.NowsSMidMusicID8,.NowsSMidMusicID9').addClass('visibility1');
	});
});

$(document).ready(function() {
	$('.h1').hover(function(event) {
		$('.h1').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.h2').hover(function(event) {
		$('.h2').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.h3').hover(function(event) {
		$('.h3').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.id4').hover(function(event) {
		$('.h4').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.h5').hover(function(event) {
		$('.h5').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.h6').hover(function(event) {
		$('.h6').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.h7').hover(function(event) {
		$('.h7').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.h8').hover(function(event) {
		$('.h8').toggleClass('Opasity2 transition1');
	});
});
$(document).ready(function() {
	$('.IdPid').hover(function(event) {
		$('.IdPid').toggleClass('Opasity3 transition1');
	});
});

$(document).ready(function() {
	$('.My').hover(function(event) {
		$('.My,.Sist1').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox1').hover(function(event) {
		$('.Sist1').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist1').hover(function(event) {
		$('.Sist1').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Now').hover(function(event) {
		$('.Now,.Sist2').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox2').hover(function(event) {
		$('.Sist2').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist2').hover(function(event) {
		$('.Sist2').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.SMS').hover(function(event) {
		$('.SMS,.Sist3').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox3').hover(function(event) {
		$('.Sist3').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist3').hover(function(event) {
		$('.Sist3').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Telefon').hover(function(event) {
		$('.Telefon,.Sist4').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox4').hover(function(event) {
		$('.Sist4').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist4').hover(function(event) {
		$('.Sist4').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Frends').hover(function(event) {
		$('.Frends,.Sist5').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox5').hover(function(event) {
		$('.Sist5').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist5').hover(function(event) {
		$('.Sist5').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Group').hover(function(event) {
		$('.Group,.Sist6').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox6').hover(function(event) {
		$('.Sist6').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist6').hover(function(event) {
		$('.Sist6').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Foto').hover(function(event) {
		$('.Foto,.Sist7').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox7').hover(function(event) {
		$('.Sist7').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist7').hover(function(event) {
		$('.Sist7').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Music').hover(function(event) {
		$('.Music,.Sist8').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox8').hover(function(event) {
		$('.Sist8').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist8').hover(function(event) {
		$('.Sist8').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Video').hover(function(event) {
		$('.Video,.Sist9').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox9').hover(function(event) {
		$('.Sist9').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist9').hover(function(event) {
		$('.Sist9').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Klipu').hover(function(event) {
		$('.Klipu,.Sist10').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox10').hover(function(event) {
		$('.Sist10').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist10').hover(function(event) {
		$('.Sist10').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Game').hover(function(event) {
		$('.Game,.Sist11').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox11').hover(function(event) {
		$('.Sist11').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist11').hover(function(event) {
		$('.Sist11').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Smile').hover(function(event) {
		$('.Smile,.Sist12').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox12').hover(function(event) {
		$('.Sist12').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist12').hover(function(event) {
		$('.Sist12').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Shop').hover(function(event) {
		$('.Shop,.Sist13').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox13').hover(function(event) {
		$('.Sist13').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist13').hover(function(event) {
		$('.Sist13').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Servis').hover(function(event) {
		$('.Servis,.Sist14').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox14').hover(function(event) {
		$('.Sist14').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist14').hover(function(event) {
		$('.Sist14').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.VkPay').hover(function(event) {
		$('.VkPay,.Sist15').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox15').hover(function(event) {
		$('.Sist15').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist15').hover(function(event) {
		$('.Sist15').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Zacladku').hover(function(event) {
		$('.Zacladku,.Sist16').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox16').hover(function(event) {
		$('.Sist16').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist16').hover(function(event) {
		$('.Sist16').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.five').hover(function(event) {
		$('.five,.Sist17').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox17').hover(function(event) {
		$('.Sist17').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist17').hover(function(event) {
		$('.Sist17').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.Reclam').hover(function(event) {
		$('.Reclam,.Sist18').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SistBox18').hover(function(event) {
		$('.Sist18').toggleClass('Act2');
	});
});
$(document).ready(function() {
	$('.Sist18').hover(function(event) {
		$('.Sist18').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.MiniFooterG').hover(function(event) {
		$('.MiniFooterGalocka,.MiniFooterGalockaBlox').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.MiniFooterGalockaBlox').hover(function(event) {
		$('.MiniFooterGalockaBlox').toggleClass('Act');
	});
});
$(document).ready(function() {
	$('.SMSMenuFonIconsP').hover(function(event) {
		$('.SMSMenuFonIconsPolisca').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.PpBoxBoxID1').hover(function(event) {
		$('.PpBoxSMSID1').toggleClass('Act');
	});
	$('.PpBoxBoxID2').hover(function(event) {
		$('.PpBoxSMSID2').toggleClass('Act');
	});
	$('.PpBoxBoxID3').hover(function(event) {
		$('.PpBoxSMSID3').toggleClass('Act');
	});
	$('.PpBoxBoxID4').hover(function(event) {
		$('.PpBoxSMSID4').toggleClass('Act');
	});
	$('.PpBoxBoxID5').hover(function(event) {
		$('.PpBoxSMSID5').toggleClass('Act');
	});
	$('.PpBoxBoxID6').hover(function(event) {
		$('.PpBoxSMSID6').toggleClass('Act');
	});
	$('.PpBoxBoxID7').hover(function(event) {
		$('.PpBoxSMSID7').toggleClass('Act');
	});
	$('.PpBoxBoxID8').hover(function(event) {
		$('.PpBoxSMSID8').toggleClass('Act');
	});
});

$(document).ready(function() {
	$('.HeaderOsnBroBoxMid').hover(function(event) {
		$('.HeaderOsnBroBoxMidRightBox').toggleClass('Act');
	});
});