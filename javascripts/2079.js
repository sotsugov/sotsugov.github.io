var isoArr = ["AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG","ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BMU","BTN","BOL","BIH","BWA","BVT","BRA","VGB","IOT","BRN","BGR","BFA","BDI","KHM","CMR","CAN","CPV","CYM","CAF","TCD","CHL","CHN","HKG","MAC","CXR","CCK","COL","COM","COG","COD","COK","CRI","CIV","HRV","CUB","CYP","CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH","FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU","GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY","HTI","HMD","VAT","HND","HUN","ISL","IND","IDN","IRN","IRQ","IRL","IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT","MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","ANT","NCL","NZL","NIC","NER","NGA","NIU","NFK","MNP","NOR","OMN","PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI","QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SVK","SVN","SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWZ","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN","TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","USA","UMI","URY","UZB","VUT","VEN","VNM","VIR","WLF","ESH","YEM","ZMB","ZWE"]
var espiArr = ["S","E","G","I","D","A"]
var genArr = ["AA","OO","PX","FX","RE","MU"]

window.onload = function () {
  document.getElementById("id-iso").innerHTML = isoArr[Math.floor(Math.random() * isoArr.length)];
  document.getElementById("id-espi").innerHTML = espiArr[Math.floor(Math.random() * espiArr.length)];
  document.getElementById("id-lot").innerHTML = (Math.floor(Math.random() * (10421930994 - 1 + 1)) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("id-lr").innerHTML = (Math.random() * (0.1 - 0.0001) + 0.0001).toFixed(3);
  document.getElementById("id-gen").innerHTML = genArr[Math.floor(Math.random() * genArr.length)];
}
