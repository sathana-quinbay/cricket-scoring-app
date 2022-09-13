<template>
    <div>
        <div>
       <h4>India</h4>
       <p>1st Innings</p>
       <h1 style="color:#319DA0">92-7</h1>
       <hr class="table--hr"/>
    </div>
    <div>
        <b-row style="font-weight: bold">
            <b-col>Extras - 0</b-col>
            <b-col>Overs - 2/20</b-col>
            <b-col>CRR - 5.6</b-col>
        </b-row>
        <b-row style="margin-bottom:2%;font-weight: bold">
            <b-col>Partnership - 50(35)</b-col>
        </b-row>
        <b-row style="margin-bottom:2%;font-weight: bold;">
            <b-col><b-icon icon="pencil-fill"/>Batsman</b-col>
            <b-col>R</b-col>
            <b-col>B</b-col>
            <b-col>4s</b-col>
            <b-col>6s</b-col>
            <b-col>SR</b-col>
        </b-row>
        <b-row>
            <b-col>Kishore</b-col>
            <b-col>25</b-col>
            <b-col>12</b-col>
            <b-col>2</b-col>
            <b-col>1</b-col>
            <b-col>208.33</b-col>
        </b-row>
        <b-row style="margin-bottom:2%">
            <b-col>Kishore</b-col>
            <b-col>25</b-col>
            <b-col>12</b-col>
            <b-col>2</b-col>
            <b-col>1</b-col>
            <b-col>208.33</b-col>
        </b-row>

        <b-row style="margin-bottom:2%;font-weight: bold;">
            <b-col><b-icon icon="pencil-fill"/>Bowler</b-col>
            <b-col>O</b-col>
            <b-col>M</b-col>
            <b-col>R</b-col>
            <b-col>W</b-col>
            <b-col>ECO</b-col>
        </b-row>
        <b-row style="margin-bottom:2%">
            <b-col>Ashwin</b-col>
            <b-col>2.4</b-col>
            <b-col>1</b-col>
            <b-col>14</b-col>
            <b-col>1</b-col>
            <b-col>4.6</b-col>
        </b-row>
        <hr class="table--hr"/>
        <div>
            <table>
                <tr>
                    <td>
                        <button class="scorebtn">1</button>
                    </td>
                    <td>
                        <button class="scorebtn">2</button>
                    </td>
                    <td>
                        <button class="scorebtn">3</button>
                    </td>
                    <td>
                        <button class="scorebtn">4</button>
                    </td>
                    <td>
                        <button class="scorebtn">6</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button class="scorebtn">LB</button>
                    </td>
                    <td>
                        <button class="scorebtn">Bye</button>
                    </td>
                    <td>
                        <button class="scorebtn">3</button>
                    </td>
                    <td>
                        <button class="scorebtn">4</button>
                    </td>
                    <td>
                        <button class="scorebtn">6</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
       

       
    </div>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    .table--hr{
    border-top: 1px solid #c2baba;
  }

</style>