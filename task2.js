class Cipher
{
	constructor(msg, pwd)
	{
		this.msg = msg;
		this.pwd = pwd;
	}

	static encrypt(msg, pwd)
	{
		this.pwd = pwd;

		let ascii;
		let e_msg = '';

		for(let i=0; i<msg.length; i++)
		{
			ascii = msg[i].charCodeAt(0);
			if(ascii >= 65 && ascii <= 90)
			{
				ascii += 1;
				if(ascii > 90)
				{
					ascii -= 26;
				}
				e_msg += String.fromCharCode(ascii);
			}
			else if(ascii >= 97 && ascii <= 122)
			{
				ascii += 1;
				if(ascii > 122)
				{
					ascii -= 26;
				}
				e_msg += String.fromCharCode(ascii);
			}
			else if(ascii === 32)
			{
				e_msg += String.fromCharCode(ascii);
			}
		}
		return e_msg;
	}

	static decrypt(msg, pwd)
	{
		if(pwd === this.pwd)
		{
			let ascii;
			let d_msg = '';

			for(let i=0; i<msg.length; i++)
			{
				ascii = msg[i].charCodeAt(0);
				if(ascii >= 65 && ascii <= 90)
				{
					ascii -= 1;
					if(ascii < 65)
					{
						ascii += 26;
					}
					d_msg += String.fromCharCode(ascii);
				}
				else if(ascii >= 97 && ascii <= 122)
				{
					ascii -= 1;
					if(ascii < 97)
					{
						ascii += 26;
					}
					d_msg += String.fromCharCode(ascii);
				}
				else if(ascii === 32)
				{
					d_msg += String.fromCharCode(ascii);
				}
			}
			return d_msg;
		}
		else
		{
			return msg;
		}
	}
}

const message = Cipher.encrypt('Ini tulisan rahasia', 'p4$$w0rd');
console.log(message);
const decryptedMessage = Cipher.decrypt(message, 'p4$$w0rd');
console.log(decryptedMessage);