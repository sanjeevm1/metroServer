


const client=new Paho.MQTT.Client("broker.emqx.io",8083,process.env.SUB);

client.connect({
    onSuccess:()=>{console.log("client connected");client.subscribe("display");}
});

client.onMessageArrived=(msg)=>{
    
    //console.log(msg.payloadString);

    let obj=JSON.parse(msg.payloadString);
    console.log(obj.place);

    document.getElementById("big").innerText=obj.place+" "+obj.count;

    
};