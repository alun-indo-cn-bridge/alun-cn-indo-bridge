from googletrans import Translator
t = Translator()
print(t.translate("Stake 100 USDT for 30 days → 500 points", dest='zh-cn').text)
