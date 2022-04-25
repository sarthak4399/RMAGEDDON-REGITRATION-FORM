class Store {
    static getdata() {
      let data;
      if(localStorage.getItem('email') === null) {
         data= [];
      } else {
        books = JSON.parse(localStorage.getItem('registration number'));
      }
  
      return data;
    }
  
    static a(data) {
      const books = Store.getdata();
      
      localStorage.setItem('email', JSON.stringify(email));
    }
}
    