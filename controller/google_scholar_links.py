from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
import os
from fake_useragent import UserAgent


#setting userinput
import sys

inputt='afdsr'

inputt = ' '.join(sys.argv[1:])


x= inputt


def get_links(user_input):
	lis=[]
	#set driver configurations
	
	chrome_options = webdriver.ChromeOptions()
	
	chrome_options.add_argument("--headless")
	chrome_options.add_argument('--disable-gpu')
	chrome_options.add_argument('--no-sandbox')
	chrome_options.add_argument("--disable-dev-shm-usage")
	chrome_options.binary_location = GOOGLE_CHROME_PATH
	chrome_options.add_argument("--user-data-dir=chrome-data")
	chrome_options.add_argument("user-data-dir=chrome-data") 
	chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)

	#chrome_options.add_argument('path=C:\chromedriver.exe')
	# chrome_path = r"controller/chromedriver"
	#chrome_options.add_argument('--user-agent="Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 640 XL LTE) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.10166"')
	# driver = webdriver.Chrome(driver_path=CHROMEDRIVER_PATH, chrome_options=chrome_options)

	3#driver = webdriver.Chrome('C:\chromedriver.exe')
	#driver.delete_all_cookies()

	#going to url
	driver.get('https://scholar.google.com/')
	time.sleep(2)

	#placing user input
	textfield=driver.find_element_by_xpath("//input[@class='gs_in_txt gs_in_ac']")
	textfield.send_keys(user_input)
	time.sleep(2)

	#clicking search button
	search=driver.find_element_by_id("gs_hdr_tsb")
	search.click()

	#setting maximum pages limit
	page_no=1
	pages_limit=4

	while(page_no<pages_limit):

		#retrieving urls
		links=driver.find_elements_by_xpath("//div[@class='gs_or_ggsm']")
		for a in links:  
			link=a.find_element_by_css_selector("a")
			lis.append(link.get_attribute("href"))
			print(link.get_attribute("href"))
		time.sleep(2)
		page_no=page_no+1
		driver.find_element_by_xpath("//span[@class='gs_ico gs_ico_nav_next']").click()

	time.sleep(2)
	#print(lis)
	driver.close()

	
get_links(x)