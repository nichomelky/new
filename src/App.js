import React, {Component} from 'react'
import './App.css'
import Home from './pages/Home'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      text1: ""
    }
  }

    increment = () => {
      let newNum = this.state.num // 1
      let text1 = this.state.text1
      newNum += 1
      this.setState({
        num: newNum,
        text2: text1
      })
    }

    decrement = () => {
      let newNum = this.state.num // 1
      let text1 = this.state.text1
      newNum -= 1
      this.setState({
        num : newNum,
        text2: text1
      })
    }

    render(){

      var newNum = this.state.num
      var text2 = ""

      return (
        <div className="App">
        <div>
                <div>{newNum}</div>
                <div>{text2}</div>
                <span>
                    <button onClick={this.increment} >
                    +
                    </button>
                    <button onClick={this.decrement}>-</button>
                </span>
            </div>
        </div>
      )
    }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <body>

//       {/* <div class="header">
//         <h2>Scroll Down</h2>
//         <p>Scroll down to see the sticky effect.</p>
//       </div> */}

//       <ul>
//         <li><a class="active" href="#QTemu">Qtemu</a></li>
//         <li><a href="#createMeetup">Create Meetup</a></li>
//         <li><a href="#explore">Explore</a></li>
//       </ul>
      
//       <div class="profile">
//         <tr> 
//           <td>
//             <img src={logo}></img>
//           </td>
//           <td>
//             <div class="details">
//               <tr>
//                 <td>
//                   <h3>Hacktiv8 Meetup</h3>
//                 </td> 
//               </tr>
//               <tr>
//                 <td>
//                   <p>Location : Jakarta, Indonesia</p>
//                   </td> 
//               </tr>
//               <tr>
//                 <td>
//                   <p>Members : 1,078</p>
//                 </td> 
//               </tr>
//               <tr>
//                 <td>
//                   <p>Organizer : Adhy Wiranata</p>
//                   </td> 
//               </tr>
//             </div>
//           </td>
//         </tr>
//       </div>

//       <div class="nextMeetup">
//         <h3>Next Meetup</h3>
//         Awesome meetup and event
//         25 January 2019
//         Hello, JavaScript & Node.js Ninjas!
//         Get ready for our monthly meetup JakartaJS! This will be our fifth meeetup of 2018!
//         The meetup format will contain some short stories and technical talks.
//         If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.

//         Remember to bring a photo ID to get through building security.

//         See you there!
        
//         Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizer

//       </div>

//       <div class="aboutMeetup">
//         <h3>About Meetup</h3>
//         Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.

//         Twitter: @JakartaJS and we use the hashtag #jakartajs
//       </div>

//       <div class="members">
//         <div><h3>Members</h3>See all</div>
//         <img src={logo}></img>
//         Organizers
//         Adhy Wiranata
//         4 others.        
//       </div>

//       <div class="pastMeetups">
//         <div><h3>Past Meetups</h3>See all</div>
//         <tr>
//           <td>
//             <div>
//               27 November 2017
//               #39 JakartaJS April Meetup with kumparan
//               139 went
//               <button >
//                 View
//               </button>
//             </div>
//           </td>
//           <td>
//             <div>
//               27 November 2017
//               #39 JakartaJS April Meetup with kumparan
//               139 went
//               <button >
//                 View
//               </button>
//             </div>
//           </td>
//           <td>
//             <div>
//               27 November 2017
//               #39 JakartaJS April Meetup with kumparan
//               139 went
//               <button >
//                 View
//               </button>
//             </div>
//           </td>
//         </tr>
//       </div>
//     </body>
//     )
//   }
// }

// export default App;

// import logo from './logo.svg';
// import Header from './components/Header'
// import './App.css'

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       num:0
//     }
//   }

//   increment = () => {
//     let newNum = this.state.num //1
  
//     newNum+=1

//     this.setState({
//       num: newNum
//     })
//   }

//   render(){

//     var newNum = this.state.num * 10

//     return (
//       <div className="App">
//         <Header cart={} />
        
//         <span>
//           <button onClick={this.increment} >
//           +
//           </button>
//           <button>-</button>
//         </span>
//       </div>
//     );
//   }
// }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <div class="topnav">
//           <a class="active" href="#home">QTemu</a>
//           <a href="#news">Create Meetup</a>
//           <a href="#contact">Explore</a>
//           <a href="#about">Login</a>
//         </div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <body className="App-body">

//       <h1>Hello World!</h1>

//       <p>This page has a light blue background color!</p>

//       </body>
//     </div>
//   );
// }

// export default App;