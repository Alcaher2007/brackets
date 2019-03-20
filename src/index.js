module.exports = function check(str, bracketsConfig) {
var hek=str.split('');
let r=25;
while(0<r)
{
r--;
for(var i=0;i<bracketsConfig.length;i++)
{
for(var n=0;n<str.length;n++) 
{
if(hek[n]==bracketsConfig[i][0] && hek[n+1]==bracketsConfig[i][1])
{
hek.splice(n, 2);
n=n-1;
}
else
{
continue;
}
}
}
}
if(hek.length==0)
{
return true;
}
else
{
return false;
}

}
