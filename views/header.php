<header class="header">
	<div class="headerHome">
		<div class="headerGroup" style="width: 337px">
			<img src="/imgs/logo.png" alt="Logo" class="logo">
			<img src="/imgs/btnRegister.png" class="w3-right btn btnRegister">
		</div>
		<form class="headerGroup" id="frmLogin" method="POST" style="width: 580px">
			<input type="text" name="name" class="inpHeader" placeholder="Tên đăng nhập" required>
			<input type="password" name="pass" class="inpHeader" placeholder="Mật khẩu" required>
			<input type="button" name="submit" id="btnLogin" class="btn" value="">
		</form>
		<div class="headerGroup" style="width: 207px">
			<img src="/imgs/btnFbLogin.png" class="btn btnFbLogin">
			<div class="w3-right">
				<a href="javascript:" class="w3-text-amber lnkForgotPass">Quên mật khẩu</a>
			</div>
		</div>
	</div>
	<div class="headerLogged" style="display: none">
		<div class="w3-left">
			<div class="headerLogoutBtn"></div>
			<div class="headerAvata">
				<img src="/imgs/avata0.png" class="headerAvataImg">
				<big class="headerUserName">TienCoffee</big><br>
				<small class="w3-text-amber headerUserLv">Level 1</small>
			</div>
			<div class="headerMoney">
				<!-- <input type="number" class="inpMoney" id="inpBCoin">
				<input type="number" class="inpMoney" id="inpXu"> -->
			</div>
		</div>
	</div>
</header>
