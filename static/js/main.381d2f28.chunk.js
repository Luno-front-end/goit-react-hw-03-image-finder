(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){},4:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(3),i=a.n(o),s=(a(20),a(12)),l=a(5),m=a(6),u=a(8),h=a(7),g=a(10);a(21);var d={imagesFetch:function(e,t){return fetch("".concat("https://pixabay.com/api/","?").concat("key=19055497-436f2f9143aedeb9fa32eebb3","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044e\u0442"))}))}},j=a(13),b=a.n(j),f=(a(4),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={nameImage:""},e.onValueInput=function(t){e.setState({nameImage:t.currentTarget.value.toLowerCase()})},e.onSubmitFetch=function(t){t.preventDefault(),""!==e.state.nameImage.trim()?(e.props.onSubmit(e.state.nameImage.trim()),e.setState({nameImage:""})):g.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0456\u043c'\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a.")},e}return Object(m.a)(a,[{key:"render",value:function(){var e=b.a.generate();return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitFetch,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"\u041f\u043e\u0448\u0443\u043a"})}),Object(n.jsx)("input",{id:e,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0448\u0443\u043a \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0442\u0430 \u0444\u043e\u0442\u043e",name:"name",value:this.state.nameImage,onChange:this.onValueInput})]})})}}]),a}(r.Component));function p(e){var t=e.webformatURL,a=e.tags,r=e.largeImageURL,c=e.onClick;return Object(n.jsx)("li",{onClick:function(){return c(r,a)},className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})})}function O(e){var t=e.arrayImages,a=e.onSubmit;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(n.jsx)(p,{webformatURL:r,tags:o,largeImageURL:c,onClick:a},t)}))})}var v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).exitModal=function(t){"Escape"===t.code&&e.props.onClose(),console.log(t.code)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.exitModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.exitModal)}},{key:"render",value:function(){var e=document.querySelector("#modal-root");return Object(o.createPortal)(Object(n.jsx)("div",{className:"Overlay",children:Object(n.jsx)("div",{className:"Modal",children:this.props.children})}),e)}}]),a}(r.Component),y=a(14),I=a.n(y);function x(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)(I.a,{type:"BallTriangle",color:"#00BFFF",height:200,width:200})})}var w=function(e){var t=e.children,a=e.onClick;return Object(n.jsx)("div",{className:"containerBtn-loadMore",children:Object(n.jsx)("button",{className:"Button",onClick:a,children:t})})},S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={nameImage:"",imagesArray:[],loading:!1,selectedImage:null,page:1,showModal:!1,error:null},e.searchImagesFetch=function(){var t=e.state,a=t.page,n=t.nameImage;e.setState({loading:!0}),d.imagesFetch(n,a).then((function(t){return e.checkNewFetchImagesArray(t.hits)})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState((function(e){return{loading:!1,page:e.page+1}}))}))},e.checkNewFetchImagesArray=function(t){t===[]?e.setState({imagesArray:t}):e.setState((function(e){return{imagesArray:[].concat(Object(s.a)(e.imagesArray),Object(s.a)(t))}}))},e.togleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.isHendleFormaSubmit=function(t){e.setState({nameImage:t})},e.isCurrentImage=function(t,a){e.setState({selectedImage:[t,a],showModal:!0})},e.scrollGallery=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},e.onClickLoadMore=function(){e.searchImagesFetch(),e.scrollGallery()},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.nameImage!==this.state.nameImage&&(this.setState({page:1,nameImage:this.state.nameImage,imagesArray:[]}),this.searchImagesFetch())}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,r=t.showModal,c=t.nameImage,o=t.imagesArray,i=t.selectedImage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{onSubmit:this.isHendleFormaSubmit}),o&&Object(n.jsx)(O,{arrayImages:o,onSubmit:this.isCurrentImage}),r&&Object(n.jsx)(v,{onClose:function(){return e.togleModal()},children:Object(n.jsx)("img",{src:i[0],alt:i[1]})}),!c&&Object(n.jsx)("div",{className:"container-paragraphInfo",children:Object(n.jsx)("p",{className:"paragraphInfo",children:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u0456\u043c'\u044f! \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0439\u043e\u0433\u043e \u0432 \u043f\u043e\u043b\u0435 \u044f\u043a\u0435 \u0432\u0438\u0449\u0435."})}),Object(n.jsx)(g.a,{autoClose:3e3}),a&&Object(n.jsx)(x,{}),0!==o.length&&Object(n.jsx)(w,{onClick:this.onClickLoadMore,children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.381d2f28.chunk.js.map