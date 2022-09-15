export default{
    methods:{
        logOut(){
            localStorage.clear();
            this.$router.push("/login");
        }
    }
}