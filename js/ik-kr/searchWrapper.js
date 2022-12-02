/**
 * 
 */
'use strict'

 // IKMP 매물추천 슬라이더
                     var Slider = {
                         autoplay: false,
                         autoplaySpeed: 5000,
                         speed: 1000,
                         infinite: true,
                         arrows: true,
                         dots: true,
                         responsive: [
                             {
                                 breakpoint: 2000,
                                 settings: {
                                     slidesToShow: 3,
                                     slidesToScroll: 3,
                                 }
                             },
                                 {
                                 breakpoint: 1200,
                                 settings: {
                                     variableWidth: true
                                 }
                             }
                         ]
                     }

				function searchBodyMnaOpen(){

				    if($(".ikmp-slider .slider").hasClass('slick-slider') == false){
	                      $(".ikmp-slider .slider").slick(Slider);
	                  }else{
	                      $(".ikmp-slider .slider").slick('unslick');
	                      $(".ikmp-slider .slider").slick(Slider);
	                  }
					
					var sliderLeft = $('.ikmp-slider .slider .slick-dots').position().left;
					var sliderRight = $('.ikmp-slider .slider .slick-dots').position().left + $('.ikmp-slider .slider .slick-dots').width() + $('.ikmp-slider .slider .slick-next').width();
					var sliderTop = $('.ikmp-slider .slider .slick-dots').position().top;
					
					$(".ikmp-slider .slider .slick-prev").css({'left':sliderLeft,'top':sliderTop})
					$(".ikmp-slider .slider .slick-next").css({'left':sliderRight,'top':sliderTop})
				}
                
             function searchBodyGrfiOpen(){
				
            	  if($(".position-slider .slider").hasClass('slick-slider') == false){
                      $(".position-slider .slider").slick(Slider);
                  }else{
                      $(".position-slider .slider").slick('unslick');
                      $(".position-slider .slider").slick(Slider);
                  }
			
				
				var sliderLeft2 = $('.position-slider .slider .slick-dots').position().left;
				var sliderRight2 = $('.position-slider .slider .slick-dots').position().left + $('.position-slider .slider .slick-dots').width() + $('.position-slider .slider .slick-next').width();
				var sliderTop2 = $('.position-slider .slider .slick-dots').position().top;
				
				$(".position-slider .slider .slick-prev").css({'left':sliderLeft2,'top':sliderTop2})
				$(".position-slider .slider .slick-next").css({'left':sliderRight2,'top':sliderTop2})
			}  
                     var makeSearchResult = function(data){
                    	 
                    	 if(data.perfrmYn){
                    		$("#is-perfrm").show(); 
                    		$(".link01").removeClass("mn3");
                    	 }else{
                    		 $("#is-perfrm").hide();
                    		 $(".link01").addClass("mn3"); 
                    	 }
                    	 $.each(data.searchList,function(i,v){
                    		 if(v.Id == 'news'){
                    			 $("#news-cnt").text(v.DocumentSet.TotalCount);
                    			 $("#news-bbs-cnt").html('총 <span class="num">'+numberWithCommas(v.DocumentSet.TotalCount)+'건</span>의 데이터<span class="pc-content">가</span> 검색<span class="pc-content">되었습니다.</span>');
                    				 var newsBbs = "";
 	                    			 $.each(v.DocumentSet.Document,function(k,d){
 	                    				var regDt = new Date(d.Date);
	                    				 var year = regDt.getFullYear();
	                    				 var mouth = ('0'+(1 + regDt.getMonth())).slice(-2);
	                    				 var day = ('0'+regDt.getDate()).slice(-2);
	                    				 newsBbs += '<li><a href="'+d.Field.PATH_MENU_URL+'" target="_balnk" title="새창열림">'+d.Field.SJ+'</a><span class="date">'+year+'.'+mouth+'.'+day+'</span></li>';
                     				 });
 	                    			if(newsBbs == ""){
 	 	      							 $("#news-bbs-list").append("<li>데이터가 없습니다.</li>");
 		 	      						 }else{
 		 	      							 $("#news-bbs-list").append(newsBbs);
 		 	      						 }
                    		 }else if(v.Id == 'indust_rpt'){
                    			 $("#rpt-cnt").text(v.DocumentSet.TotalCount);
                    			 $("#rpt-bbs-cnt").html('총 <span class="num">'+numberWithCommas(v.DocumentSet.TotalCount)+'건</span>의 데이터<span class="pc-content">가</span> 검색<span class="pc-content">되었습니다.</span>');
									var rptBbs = "";
	                    			 $.each(v.DocumentSet.Document,function(k,d){
	                    				 var regDt = new Date(d.Date);
	                    				 var year = regDt.getFullYear();
	                    				 var mouth = ('0'+(1 + regDt.getMonth())).slice(-2);
	                    				 var day = ('0'+regDt.getDate()).slice(-2);
	                    				 rptBbs += '<li><a href="'+d.Field.PATH_MENU_URL+'" target="_balnk" title="새창열림">'+d.Field.SJ+'</a><span class="date">'+year+'.'+mouth+'.'+day+'</span></li>';
	                    			 });
	                    			 if(rptBbs == ""){
	        							 $("#rpt-bbs-list").append("<li>데이터가 없습니다.</li>");
	        						 }else{
	        							 $("#rpt-bbs-list").append(rptBbs);
	        						 }
                    		 }
                    	 });
						 

						 $("#mna-cnt").text(data.mnaCnt);
						 //$("#mna-bbs-cnt").html('총 <span class="num">'+numberWithCommas(data.mnaCnt)+'건</span>의 데이터<span class="pc-content">가</span> 검색<span class="pc-content">되었습니다.</span>');
	                	 $(".ikmp-slider .slider > *").remove();
						 var mnaBbs = "";
						 $.each(data.mnaList,function(i,v){
							 mnaBbs += '<div class="slide">';
							 mnaBbs += '<a href="/ik-en/pgm/i-441/inquiry/front/project-detail.do?fatsht_sn='+v.fatshtSn+'" target="_balnk" title="새창열림">';
							 mnaBbs += '<div class="cont">';
							 //mnaBbs += '<div class="badge">BEST<span>'+(i+1)+'</span></div>';
							 mnaBbs += '<div class="category">'+v.entpIndutyName+'</div>';
							 mnaBbs += '<div class="tit">'+v.pjtEngName+'</div>';
							 mnaBbs += '<div class="desc">'+v.techDcEngCn+'</div>';
							 mnaBbs += '</div>';
							 mnaBbs += '<div class="btm">';
							 mnaBbs += '<div class="l">Fundrasing Target</div>';
							 mnaBbs += '<div class="r">USD<span>'+(v.invtHopeAmt/1000000)+'M</span></div>';
							 mnaBbs += '</div>';
							 mnaBbs += '</a>';
							 mnaBbs += '</div>';
						 });
						 
						 if(mnaBbs == ""){
							 $("#mna-bbs-list").append("<li>매물추천 정보가 없습니다.</li>");
						 }else{
							 $("#mna-bbs-list").append(mnaBbs);
						 }

						 if($("#mna-bbs-list > .slide").length > 0){
							 searchBodyMnaOpen(); 
						 }

                     }
                     
                     var makeSearchGfResult = function(data){
                    	
                    	 if(data.perfrmYn){
                     		$("#is-perfrm").show(); 
                     		$(".link01").removeClass("mn3");
                     	 }else{
                     		 $("#is-perfrm").hide();
                     		 $(".link01").addClass("mn3"); 
                     	 }
                     	 $.each(data.searchList,function(i,v){
                     		 if(v.Id == 'news'){
                     			 $("#news-cnt").text(v.DocumentSet.TotalCount);
                     			 $("#news-bbs-cnt").html('총 <span class="num">'+numberWithCommas(v.DocumentSet.TotalCount)+'건</span>의 데이터<span class="pc-content">가</span> 검색<span class="pc-content">되었습니다.</span>');
                     				 var newsBbs = "";
  	                    			 $.each(v.DocumentSet.Document,function(k,d){
  	                    				var regDt = new Date(d.Date);
 	                    				 var year = regDt.getFullYear();
 	                    				 var mouth = ('0'+(1 + regDt.getMonth())).slice(-2);
 	                    				 var day = ('0'+regDt.getDate()).slice(-2);
 	                    				 newsBbs += '<li><a href="'+d.Field.PATH_MENU_URL+'" target="_balnk" title="새창열림">'+d.Field.SJ+'</a><span class="date">'+year+'.'+mouth+'.'+day+'</span></li>';
                      				 });
  	                    			if(newsBbs == ""){
  	 	      							 $("#news-bbs-list").append("<li>데이터가 없습니다.</li>");
  		 	      						 }else{
  		 	      							 $("#news-bbs-list").append(newsBbs);
  		 	      						 }
                     		 }else if(v.Id == 'indust_rpt'){
                     			 $("#rpt-cnt").text(v.DocumentSet.TotalCount);
                     			 $("#rpt-bbs-cnt").html('총 <span class="num">'+numberWithCommas(v.DocumentSet.TotalCount)+'건</span>의 데이터<span class="pc-content">가</span> 검색<span class="pc-content">되었습니다.</span>');
 									var rptBbs = "";
 	                    			 $.each(v.DocumentSet.Document,function(k,d){
 	                    				 var regDt = new Date(d.Date);
 	                    				 var year = regDt.getFullYear();
 	                    				 var mouth = ('0'+(1 + regDt.getMonth())).slice(-2);
 	                    				 var day = ('0'+regDt.getDate()).slice(-2);
 	                    				 rptBbs += '<li><a href="'+d.Field.PATH_MENU_URL+'" target="_balnk" title="새창열림">'+d.Field.SJ+'</a><span class="date">'+year+'.'+mouth+'.'+day+'</span></li>';
 	                    			 });
 	                    			 if(rptBbs == ""){
 	        							 $("#rpt-bbs-list").append("<li>데이터가 없습니다.</li>");
 	        						 }else{
 	        							 $("#rpt-bbs-list").append(rptBbs);
 	        						 }
                     		 }
                     	 });

						 $("#grfi-cnt").text(data.grfiCnt);
						 //$("#grfi-bbs-cnt").html('총 <span class="num">'+numberWithCommas(data.grfiCnt)+'건</span>의 데이터<span class="pc-content">가</span> 검색<span class="pc-content">되었습니다.</span>');
						 var grfiBbs = "";
						 $(".position-slider .slider > *").remove();
						 $.each(data.grfiList,function(i,v){
							 console.log(v);
							 grfiBbs += '<div class="slide">';
							 grfiBbs += '<a href="#" class="gfri-info" data-seq="'+v.indust_hsmp_cd+'">';
							 grfiBbs += '<div class="cont">';
							 //grfiBbs += '<div class="badge">BEST<span>'+(i+1)+'</span></div>';
							 grfiBbs += '<div class="category">'+v.krn_regn_name+'</div>';
							 grfiBbs += '<div class="tit">'+v.krn_hsmp_name+'</div>';
							 grfiBbs += '<ul class="list02">';
							 grfiBbs += '<li><span class="bold">지정면적(km2) : </span>'+numberWithCommas(v.appn_ar)+'</li>';
							 grfiBbs += '<li><span class="bold">인근철도역 : </span>'+v.krn_rlroad_name+'</li>';
							 grfiBbs += '<li><span class="bold">인근공항 : </span>'+v.krn_arprt_val+'</li>';
							 grfiBbs += '</ul>';
							 grfiBbs += '<button type="button" class="btn-position gfri-info" data-seq="'+v.indust_hsmp_cd+'">산업단지정보보기</button>';
							grfiBbs += '</div>';
							 grfiBbs += '</a>';
							 grfiBbs += '</div>';
						 });
						
						 if(grfiBbs == ""){
							 $("#grfi-bbs-list").html("<li>입지정보 추천 정보가 없습니다.</li>");
						 }else{
							 $("#grfi-bbs-list").append(grfiBbs);
						 }
						 
						 if($("#grfi-bbs-list > .slide").length > 0){
							 searchBodyGrfiOpen(); 
						 }
						
                     }
                     
                     var makeBbsList =function(data){
                    	 $("#popup-total-count").html('전체 : <span>'+numberWithCommas(data.totCnt)+'</span>건 [<span>'+data.paginationInfo.currentPageNo+'</span>/'+data.paginationInfo.totalPageCount+'페이지]');
                    	 var listHtml = "";
                    	 $.each(data.resultList.Document,function(i,v){
                    		 var regDt = new Date(v.Date);
            				 var year = regDt.getFullYear();
            				 var month = ('0'+(1 + regDt.getMonth())).slice(-2);
            				 var day = ('0'+regDt.getDate()).slice(-2);
            				 
                    		 listHtml += '<li>';
                    		 listHtml += '<div class="num-area">No.<span>'+parseInt(data.totCnt - ((data.paginationInfo.currentPageNo-1)*data.paginationInfo.recordCountPerPage+i))+'</span></div>';
                    		 listHtml += '<div class="txt-area">';
                    		 listHtml += '<strong class="tit">'+v.Field.SJ+'</strong>';
                    		 listHtml += '<div class="board-list-box">';
                    		 listHtml += '<ul class="list01">';
                    		 listHtml += '<li><span class="bold">작성자 : </span>'+v.Field.USER_NAME+'</li>';
                    		 listHtml += '<li><span class="bold">작성일 : </span>'+year+'.'+month+'.'+day+'</li>';
                    		 listHtml += '<li><span class="bold">조회수 : </span>'+numberWithCommas(v.Field.RDCNT)+'</li>';
                    		 listHtml += '</ul>';
                    		 listHtml += '</div>';
                    		 listHtml += '<a href="'+v.Field.PATH_MENU_URL+'" target="_balnk" title="새창열림" class="btn-go">바로가기</a>';
                    		 listHtml += '</div>';
                    		 listHtml += '</li>';
                    	 });
                    	 if(listHtml == ""){
                    		 $("#popup-data-list").append("<li>데이터가 없습니다.</li>");
   						 }else{
   							 $("#popup-data-list").append(listHtml);
   						 }
                     }
                     
                     
                     var pagination = function(paging){
                    	 if(paging.totalRecordCount <= 0) return ""; 
                    	 
                    	 var pagination = "";
                    	 
                    	// 처음 버튼
                    		if(paging.currentPageNo != 1)
                    			pagination = pagination + '<a href="#" class="btn-paging01 firstPage" data-page="1"><span class="blind">처음 페이지로 이동</span></a>';
                    	    else
                    			pagination = pagination + '<a href="#" class="btn-paging01 disabled" data-page="1"><span class="blind">처음 페이지로 이동</span></a>';

                    		// 이전 버튼
                    	    if(paging.firstPageNoOnPageList != 1)
                    	    	pagination = pagination + '<a href="#" class="btn-paging02 backPage" data-page="'+ (paging.firstPageNoOnPageList - paging.pageSize) +'"><span class="blind">이전 페이지로 이동</span></a>';
                    	    else
                    	    	pagination = pagination + '<a href="#" class="btn-paging02 disabled" data-page="1"><span class="blind">이전 페이지로 이동</span></a>';
                    	    	
                    		// 페이징
                    	    for(var i = paging.firstPageNoOnPageList ; i <= paging.lastPageNoOnPageList ; i++){
                    	    	if(paging.currentPageNo == i){
                    	    		pagination = pagination + '<strong>'+ i +'</strong>';
                    	    	}else{
                    	    		pagination = pagination + '<a href="#" class="goPage" data-page="'+ (i == 1 ? 0 : i) +'">'+ i +'</a>';
                    	    	}
                    	    }
                    	    //console.log(paging.totalPageCount);

                    		// 다음 버튼
                    	    if(paging.lastPageNoOnPageList < paging.totalPageCount)
                    	    	pagination = pagination + '<a href="#" class="btn-paging03 nextPage" data-page="'+ (paging.firstPageNoOnPageList + paging.pageSize) +'"><span class="blind">다음 페이지로 이동</span></a>';
                    	    else
                    	    	pagination = pagination + '<a href="#" class="btn-paging03 disabled" data-page="'+ (paging.firstPageNoOnPageList + paging.pageSize) +'"><span class="blind">다음 페이지로 이동</span></a>';

                    	    // 끝 버튼
                    	    if(paging.currentPageNo < paging.totalPageCount)
                    	    	pagination = pagination + '<a href="#" class="btn-paging04 lastPage" data-page="'+ paging.totalPageCount +'"><span class="blind">마지막 페이지로 이동</span></a>';
                    	    else
                    	    	pagination = pagination + '<a href="#" class="btn-paging04 disabled" data-page="'+ paging.totalPageCount +'"><span class="blind">마지막 페이지로 이동</span></a>';
                    	    	
                    	    return pagination;
                     }
                     var makeDetailResult = function(data){
                    	 $("#grfi-name").text("["+data.krn_regn_name+"] "+data.krn_hsmp_name);
                    	 $("#krn_hsmp_name").text(data.krn_hsmp_name);
                    	 $("#hmpg_url").attr("href",data.hmpg_url);
                    	 $("#appn_de").text(data.appn_de);
                    	 $("#appn_ar").text(numberWithCommas(data.appn_ar));
                    	 $("#mnt_instt_name").text(data.mnt_instt_name);
                    	 $("#krn_rlroad_name").text(data.krn_rlroad_name);
                    	 $("#rlroad_dstnc").text(numberWithCommas(data.rlroad_dstnc));
                    	 $("#krn_arprt_val").text(data.krn_arprt_val);
                    	 $("#arprt_dstnc").text(numberWithCommas(data.arprt_dstnc));
                    	 $("#indust_uswtr_val").text(data.indust_uswtr_val);
                    	 $("#krn_regn_name").text(data.krn_regn_name);
                    	 $("#popltn_val").text(numberWithCommas(data.popltn_val));
                     }
                     
                     var step1 = function(data){
                      	var liHtml = '';
                      	$("#step2").empty();
                      	$("#step3").empty();
                      	$("#step4").empty();
                      	$.each(data.data,function(i,v){
                      		liHtml += '<li><a href="#" class="indust-code" data-seq="'+v.indust_cl_cd+'" data-step="2">'+v.indust_cl_cd_name+'</a></li>';
                      	});
                      	$("#step2").append(liHtml);
                      	
                      }

                      var step2 = function(data){
                      	var liHtml = '';
                      	$("#step3").empty();
                      	$("#step4").empty();
                      	$.each(data.data,function(i,v){
                      		liHtml += '<li><a href="#" class="indust-code" data-seq="'+v.indust_cl_cd+'" data-step="3">'+v.indust_cl_cd_name+'</a></li>';
                      	});
                      	$("#step3").append(liHtml);
                      }

                      var step3 = function(data){
                      	var liHtml = '';
                      	$("#step4").empty();
                      	$.each(data.data,function(i,v){
                      		liHtml += '<li><a href="#" class="last-code" data-seq="'+v.indust_cl_cd+'">'+v.indust_cl_cd_name+'</a></li>';
                      	});
                      	$("#step4").append(liHtml);
                      }

                      var selFail = function(xhr,status,error){
                      	console.log(xhr+" : "+status+" : "+error);
                      }
                      
                 	var numberWithCommas = function(x) {
                		var pattern = /^-?\d+(?:[.]\d{0,2}?)?$/;
                		x = x.toString().replace(/,/gi,"");
                		
                		if(x == ""){
                			return 0;
                		}
                		
                		if(pattern.test(x)){
                		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                		}else{
                			alert("숫자와 소수점은 2자리까지 입력할 수 있습니다.");
                			return "";
                		}
                	}
                	