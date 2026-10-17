document.querySelector('.menu')?.addEventListener('click',()=>{let n=document.querySelector('.nav');n.classList.toggle('open');document.querySelector('.menu').setAttribute('aria-expanded',n.classList.contains('open'))});
const f=document.getElementById('estimateForm');if(f){let fields=['customer','phone','email','year','make','model','mileage','service','details','zip'];let get=(k)=>f.elements[k]?.value.trim()||'';let safe=(s)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));function update(){let svc=get('service')||'Service not selected';let veh=[get('year'),get('make'),get('model')].filter(Boolean).join(' ')||'Vehicle not entered';document.getElementById('lineService').textContent=svc;document.getElementById('lineVehicle').textContent=veh;document.getElementById('lineCustomer').textContent=get('customer')||'Customer name pending';document.getElementById('lineDate').textContent=new Date().toLocaleDateString('en-US');}f.addEventListener('input',update);f.addEventListener('change',update);update();function message(){return `ESTIMATE REQUEST — ALEX MOBILE MECHANIC LLC
Customer: ${get('customer')}
Phone: ${get('phone')}
Email: ${get('email')}
Vehicle: ${get('year')} ${get('make')} ${get('model')}
Mileage: ${get('mileage')}
Service: ${get('service')}
ZIP / Location: ${get('zip')}
Problem: ${get('details')}

Note: $999 shown on website is DEMO PLACEHOLDER ONLY, not an actual estimate. Please provide a real quote.`}document.getElementById('sendText').addEventListener('click',()=>{if(!f.reportValidity())return;location.href='sms:+18608406626?body='+encodeURIComponent(message())});document.getElementById('sendEmail').addEventListener('click',()=>{if(!f.reportValidity())return;location.href='mailto:Lexaponte8@gmail.com?subject='+encodeURIComponent('Website estimate request — '+get('customer'))+'&body='+encodeURIComponent(message())});document.getElementById('printInvoice').addEventListener('click',()=>{update();window.print()});}