const _0x34c0b0=_0x1b5d;function _0xee1a(){const _0x5cb130=['convert','34531kFOBaF','5889185xvRnMN','toimg','1693168OxmrVh','4025142OMAikE','../command','writeFile','viewOnceMessage','10APNgwd','12486wcBToT','9390429kaEtnT','file-type','.sticker\x20<Reply\x20to\x20image>','../config','28XyLmwu','*Error\x20!!*','313653fMPEWw','4781dRPeek','readFileSync','එය\x20ඔබගේ\x20පිළිතුරු\x20දුන්\x20ස්ටිකරය\x20img\x20බවට\x20පරිවර්තනය\x20කරයි.','quoted','download','../lib/functions','8uyfcCn','imageMessage','fromBuffer','type','ext','videoMessage','msg'];_0xee1a=function(){return _0x5cb130;};return _0xee1a();}(function(_0x59177a,_0x3ece76){const _0x33b791=_0x1b5d,_0x1b6cbd=_0x59177a();while(!![]){try{const _0xbd80bf=parseInt(_0x33b791(0x1e4))/0x1*(parseInt(_0x33b791(0x1fb))/0x2)+-parseInt(_0x33b791(0x1f4))/0x3*(parseInt(_0x33b791(0x1f2))/0x4)+parseInt(_0x33b791(0x1e5))/0x5+-parseInt(_0x33b791(0x1ed))/0x6*(parseInt(_0x33b791(0x1f5))/0x7)+parseInt(_0x33b791(0x1e7))/0x8+parseInt(_0x33b791(0x1ee))/0x9*(parseInt(_0x33b791(0x1ec))/0xa)+parseInt(_0x33b791(0x1e8))/0xb;if(_0xbd80bf===_0x3ece76)break;else _0x1b6cbd['push'](_0x1b6cbd['shift']());}catch(_0x510555){_0x1b6cbd['push'](_0x1b6cbd['shift']());}}}(_0xee1a,0xbf572));const config=require(_0x34c0b0(0x1f1)),{cmd,commands}=require(_0x34c0b0(0x1e9)),fs=require('fs'),fileType=require(_0x34c0b0(0x1ef)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x34c0b0(0x1fa));var imgmsg='*ස්ටිකරයකට\x20පිළිතුරු\x20දෙන්න*!',descg=_0x34c0b0(0x1f7);function _0x1b5d(_0x4509e8,_0x28cd16){const _0xee1a7c=_0xee1a();return _0x1b5d=function(_0x1b5d71,_0x46a071){_0x1b5d71=_0x1b5d71-0x1de;let _0x4cb36c=_0xee1a7c[_0x1b5d71];return _0x4cb36c;},_0x1b5d(_0x4509e8,_0x28cd16);}cmd({'pattern':_0x34c0b0(0x1e6),'react':'🔮','alias':['s','stic'],'desc':descg,'category':_0x34c0b0(0x1e3),'use':_0x34c0b0(0x1f0),'filename':__filename},async(_0x214c37,_0x43bd99,_0x3b972d,{from:_0x51b1dd,l:_0x6db86c,quoted:_0xef0384,body:_0x53d08d,isCmd:_0x78bc1d,command:_0x11b45f,args:_0x424432,q:_0xf6e337,isGroup:_0x27e8ef,sender:_0x256824,senderNumber:_0x2cc7d3,botNumber2:_0x3606e9,botNumber:_0x3daf3c,pushname:_0x1f6ee7,isMe:_0x23af0a,isOwner:_0x59fc62,groupMetadata:_0x50f2ab,groupName:_0x461efc,participants:_0x160b91,groupAdmins:_0x5de320,isBotAdmins:_0x27cb08,isAdmins:_0x276be0,reply:_0x242d4a})=>{const _0x514272=_0x34c0b0;try{const _0xc12fd4=_0x3b972d[_0x514272(0x1f8)]?_0x3b972d[_0x514272(0x1f8)][_0x514272(0x1df)]===_0x514272(0x1eb):![],_0x2564f9=_0x3b972d[_0x514272(0x1f8)]?_0x3b972d[_0x514272(0x1f8)][_0x514272(0x1df)]===_0x514272(0x1fc)||(_0xc12fd4?_0x3b972d[_0x514272(0x1f8)][_0x514272(0x1e2)][_0x514272(0x1df)]===_0x514272(0x1fc):![]):![],_0x1dc957=_0x3b972d['quoted']?_0x3b972d[_0x514272(0x1f8)][_0x514272(0x1df)]===_0x514272(0x1e1)||(_0xc12fd4?_0x3b972d['quoted'][_0x514272(0x1e2)][_0x514272(0x1df)]===_0x514272(0x1e1):![]):![],_0x38d47e=_0x3b972d[_0x514272(0x1f8)]?_0x3b972d[_0x514272(0x1f8)][_0x514272(0x1df)]==='stickerMessage':![];if(_0x38d47e){var _0x167d9f=getRandom('');let _0xd06f37=_0x38d47e?await _0x3b972d[_0x514272(0x1f8)]['download'](_0x167d9f):await _0x3b972d[_0x514272(0x1f9)](_0x167d9f),_0x35c10a=await fileType[_0x514272(0x1de)](_0xd06f37);await fs['promises'][_0x514272(0x1ea)]('./'+_0x35c10a[_0x514272(0x1e0)],_0xd06f37),await _0x214c37['sendMessage'](_0x51b1dd,{'image':fs[_0x514272(0x1f6)]('./'+_0x35c10a[_0x514272(0x1e0)]),'caption':config['FOOTER']},{'quoted':_0x43bd99});}else return await _0x242d4a(imgmsg);}catch(_0x2ac6de){_0x242d4a(_0x514272(0x1f3)),_0x6db86c(_0x2ac6de);}});