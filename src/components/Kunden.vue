<template>
<v-container v-if="this.$store.state.loading">
<v-progress-circular id="loading"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
</v-container>

 <v-container v-else>
    <h1>Kunden</h1>

  <v-card>
   <v-card-title>
      <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        >
      </v-text-field>

      <v-spacer></v-spacer>

      <v-btn class="primary">Neuer Kunde</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="kunden"
      :search="search"
      hide-actions
      item-key="name"
    >

      <template slot="items" slot-scope="props" >
      <tr @click="props.expanded = !props.expanded">
        <td><div class="datatable-cell-wrapper">{{ props.item.name }}</div></td>
        <td>{{ props.item.adresse }}</td>
        <td>{{ props.item.postleitzahl }}</td>
        <td>{{ props.item.stadt }}</td>
        <td>


        <v-tooltip bottom>
        <v-icon @click="rowClick" class="mr-2" small slot="activator">edit</v-icon>
        <span>Bearbeiten</span>
        </v-tooltip>

        <v-tooltip bottom>
        <v-icon class="mr-2" slot="activator" small>delete</v-icon>
        <span>Löschen</span>
        </v-tooltip>

        </td>
      </tr>
      </template>


      <template slot="expand" slot-scope="props">
      <v-layout align-center justify-space-around row fill-height>
      <v-flex xs3 sm6 v-for="tier in props.item.tiere">
        <v-card  flat >
        <v-list>
        <v-list-tile><b>Name: {{tier.name}}</b> </v-list-tile>
        <v-divider></v-divider>

          <v-list-tile>Tierart: {{tier.tierart}}</v-list-tile>
          <v-list-tile>Rasse: {{tier.rasse}} </v-list-tile>
        </v-list>

        </v-card>
      </v-flex>
      </v-layout>

        <div class="datatable-container"></div>

      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
       Kein Kunde gefunden mit: "{{ search }}".
      </v-alert>
    </v-data-table>
  </v-card>
 </v-container>
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex'

  export default {
    computed:{
      ...mapState({
        kunden: state => state.kunde.kunden
      })
    },
    methods: {
      rowClick: function (event){
        console.log("row clicked")
      }
    },
    data () {
      return {
        search: '',
        kunde: {
          kundennummer: 100,
          anrede: "",
          titel: "",
          nachname: "",
          vorname: "",
          email: "",
          adresse: {
            strasse_hnr: "",
            postleitzahl: null,
            stadt: ""
          },
          besonderheiten: "",
          tiere: [
            {
              name: "",
              tierart: "",
              rasse: "",
              medHistory: "",
              besonderheiten: ""
            }
          ],
          rabat: null


        },
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Adresse', value: 'adresse' },
          { text: 'Postleitzahl', value: 'postleitzahl' },
          { text: 'Stadt', value: 'stadt' },
          { text: 'Actions', sortable: false}

        ]

      }
    }
  }
</script>

<style>
</style>
