class Store {
    static getdata() {
      let data;
      localStorage.getItem('email')
         data= [];
        
       JSON.parse(localStorage.getItem('registration number'));
      
  
      return data;
    }
  
    static a(data) {
      const email = Store.getdata();
      
      localStorage.setItem('email', JSON.stringify(email));
    }
}
    
