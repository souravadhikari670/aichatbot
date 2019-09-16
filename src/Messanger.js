import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat'
export default class Messanger extends React.Component{

    render(){
        return(
            <MessengerCustomerChat
                pageId="101581574569880"
                appId="851765041884531"
                htmlRef="Hello"
                
                />
        )
    }
}

        // <a href="https://m.me/101581574569880" target="_blank">
        //     <button className="btn btn-danger" id="btnMessanger" title="What can i help you?">
        //     <i className="fa fa-comments-o" aria-hidden="true" id="btnMessangerIcon"></i>
        //     </button>
        // </a>
        //  Load Facebook SDK for JavaScript
    //   <div id="fb-root"></div>
    //   <script>
//         window.fbAsyncInit = function() {
//           FB.init({
//             xfbml            : true,
//             version          : 'v4.0'
//           });
//         };

//         (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));</script>

//     //   <!-- Your customer chat code -->
//       <div class="fb-customerchat"
//         attribution=setup_tool
//         page_id="101581574569880"
//   theme_color="#0084ff"
//   logged_in_greeting="Hello, How can i assist you !"
//   logged_out_greeting="Hello, How can i assist you !">
//       </div>
//     )
// }