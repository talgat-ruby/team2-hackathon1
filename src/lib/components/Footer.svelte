

<body class="Mobile_Body">
<footer class="Rectangle">
	<button class="Next_Button">
		<div class="Next_Button_Text">Next Step</div>
	</button>
</footer>

</body>


<style>
		.Mobile_Body{
        /* Mobile - Step 1 */
        position: relative;
        width: 375px;
        height: 667px;
        /* BG */
        background: rgb(239, 245, 255);
		}
	.Rectangle {
      position: absolute;
      width: 375px;
      height: 72px;
      left: 0;
      right: 0;
      top: 595px;
      bottom: -595px;
      box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

      /* White */

      background: rgb(255, 255, 255);
	}
	.Next_Button{
      /* Rectangle */

      cursor: pointer;
      position: relative;

      width: 97px;

      height: 40px;

      left: 0%;

      right: 0%;

      top: 0%;

      bottom: 0%;
      /* Denim */
      background: rgb(2, 41, 89);
      margin-left: 16px;
			margin-top: 16px;
			margin-bottom: 16px;
			margin-left: 262px;
      border-radius: 4px;
	}
.Next_Button_Text{
    /* Next Step */

    position: absolute;
    width: 65px;
    height: 12px;
    left: 16px;
    right: 16px;
    top: 12px;
    bottom: 12px;
    color: rgb(255, 255, 255);
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

}

</style>