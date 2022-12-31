import java.awt.event.*;
import java.awt.*;
import javax.swing.*;
import java.io.IOException;
import java.io.*;
class GospelOfJohn extends JFrame implements ItemListener {
	// frame
	static JFrame f;
	// label
	static JLabel l, l1, l3;
	// combobox
	static JComboBox c1;
	static JComboBox c2;
	// textbox
	static JTextArea textArea;
	// main class
	public static void main(String[] args)
	{
		// create a new frame
		f = new JFrame("Gospel Of John - With Psalms");
		// create a object
		GospelOfJohn s = new GospelOfJohn();
		// set layout of frame
		f.getContentPane().setLayout(new FlowLayout());
		// array of string containing cities
		String s1[] = {"John1","John2","John3","John4","John5","John6","John7","John8","John9","John10","John11","John12","John13","John14","John15","John16","John17","John18","John19","John20","John21","John22","John23","John24","John25","John26","John27","John28","John29","John30","John31","John32","John33","John34","John35","John36","John37","John38","John39","John40","John41","John42"};
		// create checkbox
		c1 = new JComboBox(s1);
		// add ItemListener
		c1.addItemListener(s);
		// create labels
		l = new JLabel("Gospel Of John");
		l1 = new JLabel("Book Of Psalms");
		String s2[] = {"Psalms1","Psalms2","Psalms3","Psalms4","Psalms5","Psalms6","Psalms7","Psalms8","Psalms9","Psalms10","Psalms11","Psalms12","Psalms13","Psalms14","Psalms15","Psalms16","Psalms17","Psalms18","Psalms19","Psalms20","Psalms21","Psalms22","Psalms23","Psalms24","Psalms25","Psalms26","Psalms27","Psalms28","Psalms29","Psalms30","Psalms31","Psalms32","Psalms33","Psalms34","Psalms35","Psalms36","Psalms37","Psalms38","Psalms39","Psalms40","Psalms41","Psalms42","Psalms43","Psalms44","Psalms45","Psalms46","Psalms47","Psalms48","Psalms49","Psalms50","Psalms51","Psalms52","Psalms53","Psalms54","Psalms55","Psalms56","Psalms57","Psalms58","Psalms59","Psalms60","Psalms61","Psalms62","Psalms63","Psalms64","Psalms65","Psalms66","Psalms67","Psalms68","Psalms69","Psalms70","Psalms71","Psalms72","Psalms73","Psalms74","Psalms75","Psalms76","Psalms77","Psalms78","Psalms79","Psalms80","Psalms81","Psalms82","Psalms83","Psalms84","Psalms85","Psalms86","Psalms87","Psalms88","Psalms89","Psalms90","Psalms91","Psalms92","Psalms93","Psalms94","Psalms95","Psalms96","Psalms97","Psalms98","Psalms99","Psalms100","Psalms101","Psalms102","Psalms103","Psalms104","Psalms105"};
		// create checkbox
		c2 = new JComboBox(s2);
		c2.setSelectedItem(null);
		// add ItemListener
		c2.addItemListener(s);
		// create a new panel
		JPanel p = new JPanel();
		p.setLayout(new GridLayout(4,0,2,2));
		p.add(l);
		// add combobox to panel
		p.add(c1);
		p.add(l1);
		p.add(c2);
		// add panel to frame
		f.getContentPane().add(p,BorderLayout.WEST);		
		// image view
		l3 = new JLabel("");
		//ImageIcon iconLogo = new ImageIcon("John1.jpg");
		ImageIcon imageIcon = new ImageIcon(new ImageIcon(GospelOfJohn.class.getResource("John1.jpg")).getImage().getScaledInstance(560, 750, Image.SCALE_SMOOTH));
		l3.setIcon(imageIcon);
		f.getContentPane().add(l3);
		// frame code
		f.pack();
		// set the size of frame
		f.setSize(770, 800);
		f.show();
	}
	public void itemStateChanged(ItemEvent e)
	{
		// if the state combobox is changed
		if (e.getSource() == c1) {
			ImageIcon imageIcon = new ImageIcon(new ImageIcon(getClass().getResource(c1.getSelectedItem() + ".jpg")).getImage().getScaledInstance(560, 750, Image.SCALE_SMOOTH));
			l3.setIcon(imageIcon);
			
		}
		if (e.getSource() == c2) {
			ImageIcon imageIcon = new ImageIcon(new ImageIcon(getClass().getResource(c2.getSelectedItem() + ".jpg")).getImage().getScaledInstance(560, 750, Image.SCALE_SMOOTH));
			l3.setIcon(imageIcon);
		}
	}

}