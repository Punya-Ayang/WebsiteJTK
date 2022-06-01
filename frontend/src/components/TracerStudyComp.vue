<template>
    <div id="tracer-study">
        <v-content>
            <div class="headline-middle mt-lg-16">
                <h1>Hasil Tracer Study</h1>
            </div>
            <div class="subheadline-ts">
                <h1>Tracer Study Lulusan Angkatan 2017</h1>
            </div>
              <div class="chart-wrapper">
                   <apexchart 
                    width="500" type="bar" 
                    :options="options" :series="series">
                </apexchart> 
            </div>
            <v-section>
                <v-container>
                    <div>
                        <div>
                        <table id="customers">
                            <tr>
                                <th>Profesi</th>
                                <th>Jumlah</th>
                            </tr>
                            <tr>
                                <td>Informatika</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Non - Informatika</td>
                                <td>20</td>
                            </tr>
                            
                            </table>
                        </div>
                        <br>
                        <div>
                        <table id="customers">
                            <tr>
                                <th>Perusahaan</th>
                                <th>Jumlah</th>
                            </tr>
                            <tr>
                                <td>Perusahaan Swasta</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Instansi Negara</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>BUMN</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Lain - lain</td>
                                <td>30</td>
                            </tr>                                                        
                            </table>
                        </div>
                        <br>
                        <div>
                        <table id="customers">
                            <tr>
                                <th>Range Gaji</th>
                                <th>Jumlah</th>
                            </tr>
                            <tr>
                                <td>1 - 5 Jt</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>6 - 10 Jt</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>10 - 20 Jt</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>> 20 Jt</td>
                                <td>10</td>
                            </tr>                                                        
                            </table>
                        </div>                        
                    </div>
                </v-container>
            </v-section>
            <br>
        </v-content>
    </div>
</template>

<style>
.subheadline-ts{
    padding-bottom : 10px;
    margin-bottom : 20px;
    text-align: center;
}
table, th, td {
  border: 1px solid;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #003399;
  color: white;
}

div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center
}
</style>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "1 - 5 Jt",
         "6 - 10 Jt",
         "10 - 20 Jt",
         "> 20 Jt",
        ]
      },
    },
    series: [{
            name: 'Perusahaan Swasta',
            data: [44, 55, 57, 56]
          }, {
            name: 'Instansi Negara',
            data: [76, 85, 101, 98]
          }, {
            name: 'BUMN',
            data: [35, 41, 36, 26]
          }, {
            name: 'Lain - Lain',
            data: [30, 21, 46, 16]
          }
          ],
  })
}
</script>