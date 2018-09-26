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
  <h1>Reservierung</h1>
  <br>
    <v-layout>
    <v-flex xs12 sm12>
      <v-card>
      <v-toolbar class="primary">
        <v-toolbar-title>Übersicht</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat> Neue Reservierung </v-btn>
        </v-toolbar-items>
      </v-toolbar>
     <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="reservierung_header"
      :items="reservierungen"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.kundennummer }}</td>
        <td >{{ props.item.kundenname }}</td>
        <td> {{ props.item.auftragsdatum.datum}} </td>
        
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

  export default {
    computed:{
      ...mapState({
        reservierungen: state => state.reservierung.reservierungen
      })
    },
    data () {
      return {
        search: '',
        reservierung_header: [
          {
            text: 'Kundennummer',
            align: 'left',
            value: 'kundennummer'
          },
          { text: 'Kundenname', value: 'kundenname' },
          { text: 'Auftragsdatum', value: 'auftragsdatum.datum'}
        ]
      }
    }
  }
</script>

<style>
</style>
