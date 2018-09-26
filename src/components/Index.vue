
 <template>
 <v-container v-if="this.$store.state.loading">
  <v-progress-circular id="loading"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
 </v-container>
 
 <v-container v-else fluid grid-list-md>
    <h1>Übersicht</h1> 
    <br>
    <v-layout row wrap>
    <v-flex xs4>
    </v-flex>
      <v-flex xs4>
        <v-card >
         <v-toolbar class="primary">
         <v-toolbar-title> Abgeholt Heute: {{ new Date().getDate() +"/"+ new Date().getMonth() + "/" + new Date().getFullYear()    }} </v-toolbar-title>
         </v-toolbar>
         <v-data-table
            :headers="headers"
            :items="abholungen"
            hide-actions
            class=""
  >
    <template slot="items" slot-scope="props">
      <td></td>
      <td class="">{{ props.item.name }}</td>
      
      <td class="">{{ props.item.uhrzeit }}</td>
    </template>
  </v-data-table>
        </v-card>
       
      </v-flex>
      <v-flex xs4>
        <v-card >
         <v-toolbar class="primary">
         <v-toolbar-title> Ankunft Heute: {{ new Date().getDate() +"/"+ new Date().getMonth() + "/" + new Date().getFullYear()    }} </v-toolbar-title>
         </v-toolbar>
         <v-data-table
            :headers="headers"
            :items="ankunft"
            hide-actions
            class=""
  >
    <template slot="items" slot-scope="props">
      <td></td>
      <td class="">{{ props.item.name }}</td>
      <td class="">{{ props.item.uhrzeit }}</td>
    </template>
  </v-data-table>
         
        </v-card>
       
      </v-flex>
    </v-layout>
    <v-layout>
    <v-flex>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card >
         <v-toolbar class="primary">
         <v-toolbar-title>Nachrichten</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-toolbar-items >
         <v-btn flat >Neue Nachricht</v-btn>
         <v-btn flat v-on:click="showAll">Show All</v-btn>
         </v-toolbar-items>
         </v-toolbar>
    
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="message in messages" 
         v-show="!message.read"
         :key="messages.from"
      >
      <div slot="header" >Nachricht von <b>{{ message.from }}</b></div>
        
        <v-card>

          <v-card-text class="grey lighten-3" 
           >
          <v-layout align-center justify-start row fill-height>
          <v-flex xs12>
          {{message.body}} 
          </v-flex>
          <v-flex>
          <v-btn flat icon @click="message.read = !message.read">
          
      <v-icon>done</v-icon>
    </v-btn>
          </v-flex>
          </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
        </v-card>
      </v-flex>
    </v-layout>
       
  
  </v-container>
  
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState({
      messages: state => state.user.messages,
      abholungen: state => state.planung.abholungen,
      ankunft: state => state.planung.ankunft
    })
  },
  methods: {
    showAll: function(event){
      var i = "";
      for (i in this.messages){
        this.messages[i].read= false;
      }
    }
  },
  
    data () {
      return {
       
        
        headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Name', value: 'name' },
          {'text': 'Uhrzeit', value: 'uhrzeit'}
        ]
        
      }
    }
  }
</script>

<style scoped>

</style>


