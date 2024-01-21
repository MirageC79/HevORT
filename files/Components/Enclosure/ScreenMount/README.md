# On Raspberry PI4
### Using HDMI LCD 7inch Touch Screen:

Set /boot/config.txt as per: https://docs.sunfounder.com/projects/ts-7c/en/latest/settings_for_raspberry_pi.html

1 - Install LCD-show:
git clone https://github.com/goodtft/LCD-show.git

2 - Promote LCD-show proviledges:
chmod -R 755 LCD-show

3 - Send rotation command (RPI will remember after reboot)
sudo ./LCD7C-show 90

4 - Reboot
sudo reboot

